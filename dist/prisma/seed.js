"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const crypto = __importStar(require("crypto"));
const node_util_1 = require("node:util");
const data_1 = require("./data");
const prisma_1 = __importDefault(require("../src/lib/prisma"));
const clerkApiBaseUrl = "https://api.clerk.com/v1";
const getList = (payload) => Array.isArray(payload) ? payload : payload.data;
const getClerkHeaders = () => {
    const clerkSecretKey = process.env.CLERK_SECRET_KEY;
    if (!clerkSecretKey) {
        throw new Error("CLERK_SECRET_KEY is required to seed Clerk data.");
    }
    return {
        Authorization: `Bearer ${clerkSecretKey}`,
        "Content-Type": "application/json",
    };
};
const clerkFetch = async (path, options = {}) => {
    var _a;
    const res = await fetch(`${clerkApiBaseUrl}${path}`, {
        ...options,
        headers: {
            ...getClerkHeaders(),
            ...((_a = options.headers) !== null && _a !== void 0 ? _a : {}),
        },
    });
    if (!res.ok) {
        const message = await res.text();
        throw new Error(`Clerk API error ${res.status}: ${message}`);
    }
    return res.json();
};
const getOrCreateClerkUser = async (user) => {
    const list = await clerkFetch(`/users?email_address=${encodeURIComponent(user.email)}`);
    const existing = getList(list).find((item) => {
        var _a;
        return (_a = item.email_addresses) === null || _a === void 0 ? void 0 : _a.some((address) => address.email_address === user.email);
    });
    if (existing) {
        return existing.id;
    }
    const created = await clerkFetch("/users", {
        method: "POST",
        body: JSON.stringify({
            email_address: [user.email],
            first_name: user.firstName,
            last_name: user.lastName,
        }),
    });
    return created.id;
};
const createClerkOrganization = async (team) => {
    const created = await clerkFetch("/organizations", {
        method: "POST",
        body: JSON.stringify({
            name: team.name,
            slug: team.slug,
        }),
    });
    return created.id;
};
const addClerkMember = async ({ organizationId, userId, role, }) => {
    const clerkRole = role === "ADMIN" ? "admin" : "basic_member";
    await clerkFetch(`/organizations/${organizationId}/memberships`, {
        method: "POST",
        body: JSON.stringify({
            user_id: userId,
            role: clerkRole,
        }),
    });
};
async function main() {
    var _a, _b;
    const { values, positionals } = (0, node_util_1.parseArgs)({
        options: {
            environment: {
                type: "string",
            },
        },
        allowPositionals: true,
    });
    const environment = (_b = (_a = values.environment) !== null && _a !== void 0 ? _a : positionals[0]) !== null && _b !== void 0 ? _b : "development";
    const useClerk = environment !== "test";
    const seedUsers = environment === "test" ? data_1.seedUsersTest : data_1.seedUsersDevelopment;
    const seedTeams = environment === "test" ? data_1.seedTeamsTest : data_1.seedTeamsDevelopment;
    const clerkUsers = new Map();
    const clerkOrganizations = new Map();
    if (useClerk) {
        for (const user of seedUsers) {
            const clerkUserId = await getOrCreateClerkUser(user);
            clerkUsers.set(user.email, clerkUserId);
        }
        for (const team of seedTeams) {
            const orgId = await createClerkOrganization(team);
            clerkOrganizations.set(team.slug, orgId);
            for (const member of team.members) {
                const clerkUserId = clerkUsers.get(member.email);
                if (!clerkUserId) {
                    throw new Error(`Missing Clerk user for ${member.email}`);
                }
                await addClerkMember({
                    organizationId: orgId,
                    userId: clerkUserId,
                    role: member.role,
                });
            }
        }
    }
    await prisma_1.default.$transaction(async (tx) => {
        await tx.teamUser.deleteMany();
        await tx.team.deleteMany();
        await tx.user.deleteMany();
        const userIdByEmail = new Map();
        for (const user of seedUsers) {
            const authId = useClerk ? clerkUsers.get(user.email) : null;
            if (useClerk && !authId) {
                throw new Error(`Missing Clerk user for ${user.email}`);
            }
            const created = await tx.user.create({
                data: {
                    authId,
                    email: user.email,
                    name: `${user.firstName} ${user.lastName}`,
                },
            });
            userIdByEmail.set(user.email, created.id);
        }
        const teamIdBySlug = new Map();
        for (const team of seedTeams) {
            const orgId = useClerk ? clerkOrganizations.get(team.slug) : null;
            if (useClerk && !orgId) {
                throw new Error(`Missing Clerk organization for ${team.slug}`);
            }
            const created = await tx.team.create({
                data: {
                    name: team.name,
                    slug: team.slug,
                    orgId,
                    apiKey: `team_${team.slug}_${crypto.randomUUID()}`,
                },
            });
            teamIdBySlug.set(team.slug, created.id);
        }
        for (const team of seedTeams) {
            const teamId = teamIdBySlug.get(team.slug);
            if (!teamId) {
                throw new Error(`Missing team record for ${team.slug}`);
            }
            for (const member of team.members) {
                const userId = userIdByEmail.get(member.email);
                if (!userId) {
                    throw new Error(`Missing user record for ${member.email}`);
                }
                await tx.teamUser.create({
                    data: {
                        teamId,
                        userId,
                        role: member.role,
                    },
                });
            }
        }
    });
}
main()
    .then(async () => {
    console.log("Seeding complete!");
    await prisma_1.default.$disconnect();
})
    .catch(async (e) => {
    console.error(e);
    await prisma_1.default.$disconnect();
    process.exit(1);
});
