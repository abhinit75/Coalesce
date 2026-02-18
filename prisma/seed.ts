import { users, teams, teamUsers, clerkOrgMemberships } from "./data.js";
import prisma from "@/lib/prisma";

async function main() {
  await prisma.$transaction(async (prisma) => {
    // Clean up existing data
    await prisma.teamUser.deleteMany();
    await prisma.team.deleteMany();
    await prisma.user.deleteMany();

    // Create users
    await prisma.user.createMany({
      data: users,
    });

    // Create teams
    await prisma.team.createMany({
      data: teams,
    });

    // Add users to teams
    await prisma.teamUser.createMany({
      data: teamUsers,
    });

    // Add members in Clerk (if CLERK_SECRET_KEY is available)
    if (process.env.CLERK_SECRET_KEY) {
      await Promise.all(
        clerkOrgMemberships.map(async (member) => {
          try {
            const res = await fetch(
              `https://api.clerk.com/v1/organizations/${member.orgId}/memberships`,
              {
                method: "POST",
                headers: {
                  Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  user_Id: member.userId,
                  role: member.role,
                }),
              },
            );
            await res.json();
          } catch (error) {
            console.warn("Failed to add Clerk membership:", error);
          }
        }),
      );
    }
  });
}

main()
  .then(async () => {
    console.log("Seeding complete!");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
