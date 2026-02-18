"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sampleMembers = exports.seedTeamsTest = exports.seedUsersTest = exports.seedTeamsDevelopment = exports.seedUsersDevelopment = void 0;
const seedUsersDevelopment = [
    {
        email: "abhineet0309@gmail.com",
        firstName: "Abhinit",
        lastName: "Patil",
    },
];
exports.seedUsersDevelopment = seedUsersDevelopment;
const seedTeamsDevelopment = [
    {
        name: "Team A",
        slug: "team-a",
        members: [
            {
                email: seedUsersDevelopment[0].email,
                role: "ADMIN",
            },
        ],
    },
];
exports.seedTeamsDevelopment = seedTeamsDevelopment;
const seedUsersTest = [
    {
        email: "test.user@example.com",
        firstName: "Test",
        lastName: "User",
    },
];
exports.seedUsersTest = seedUsersTest;
const seedTeamsTest = [
    {
        name: "Test Team",
        slug: "test-team",
        members: [
            {
                email: seedUsersTest[0].email,
                role: "ADMIN",
            },
        ],
    },
];
exports.seedTeamsTest = seedTeamsTest;
const sampleMembers = [
    {
        id: "1",
        email: "john@example.com",
        name: "John Smith",
        role: "ADMIN",
        status: "ACTIVE",
        joinedAt: new Date("2024-03-15"),
    },
    {
        id: "2",
        email: "sarah@example.com",
        name: "Sarah Johnson",
        role: "MEMBER",
        status: "ACTIVE",
        joinedAt: new Date("2024-03-14"),
    },
    {
        id: "3",
        email: "pending@example.com",
        name: null,
        role: "MEMBER",
        status: "PENDING",
        joinedAt: new Date("2024-03-13"),
    },
];
exports.sampleMembers = sampleMembers;
