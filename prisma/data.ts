import crypto from "crypto";

const users = [
  {
    id: "1",
    authId: "user_2q89dyrJBsPmyvbFVWhZDNZJ1CA",
    name: "Abhinit Patil",
    email: "abhineet0309@gmail.com",
  },
];

const teams = [
  {
    id: "1",
    name: "Team A",
    slug: "team-a",
    orgId: "org_2q89kySfFjqdTVgUBPtL0Bknzvc",
    apiKey: "team_a_" + crypto.randomUUID(),
  },
];

const teamUsers = [
  {
    userId: "1",
    teamId: "1",
    role: "ADMIN" as const,
  },
];

const clerkOrgMemberships = [
  {
    userId: users[0]!.authId,
    orgId: teams[0]!.orgId,
    role: "admin",
  },
];

const sampleMembers = [
  {
    id: "1",
    email: "john@example.com",
    name: "John Smith",
    role: "ADMIN" as const,
    status: "ACTIVE",
    joinedAt: new Date("2024-03-15"),
  },
  {
    id: "2",
    email: "sarah@example.com",
    name: "Sarah Johnson",
    role: "MEMBER" as const,
    status: "ACTIVE",
    joinedAt: new Date("2024-03-14"),
  },
  {
    id: "3",
    email: "pending@example.com",
    name: null,
    role: "MEMBER" as const,
    status: "PENDING",
    joinedAt: new Date("2024-03-13"),
  },
];

export { users, teams, teamUsers, clerkOrgMemberships, sampleMembers };
