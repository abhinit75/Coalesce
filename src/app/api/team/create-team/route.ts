import prisma from "@/lib/prisma";
import { Role } from "@prisma/client";
import type { Prisma } from "@prisma/client";
import { NextRequest as Request, NextResponse as Response } from "next/server";
import { clerkClient } from "@clerk/nextjs/server";
import { currentUser } from "@clerk/nextjs/server";
import crypto from "crypto";

export async function POST(req: Request) {
  const user = await currentUser();
  const client = await clerkClient();

  if (req.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    // Ensure the body is only read once
    const { teamName, teamSlug } = await req.json();
    const authId = user?.id;
    if (!authId) {
      return Response.json({ error: "User not found" }, { status: 404 });
    }

    // Check if the user exists
    const dbUser = await prisma.user.findUnique({
      where: { authId: authId },
    });

    if (!dbUser?.authId) {
      return Response.json({ error: "User not found" }, { status: 404 });
    }

    // If the user doesn't exist, return an error
    if (!user || !dbUser) {
      return Response.json({ error: "User not found" }, { status: 404 });
    }

    // create team on clerk as organization
    const organization = await client.organizations.createOrganization({
      name: teamName,
      slug: teamSlug,
      createdBy: dbUser.authId,
    });

    if (!organization) {
      return Response.json(
        { error: "Organization not created" },
        { status: 404 },
      );
    }

    // Start a transaction
    const result = await prisma.$transaction(
      async (tx: Prisma.TransactionClient) => {
        const team = await tx.team.create({
          data: {
            name: teamName,
            slug: teamSlug,
            orgId: organization.id,
            apiKey: `sk-${crypto.randomUUID()}`,
            members: {
              create: {
                userId: dbUser.id,
                role: Role.SUPER_ADMIN,
              },
            },
          },
          include: {
            members: true,
          },
        });

        return team;
      },
    );

    return Response.json(result);
  } catch (error) {
    if (error instanceof Error) {
      console.log("error: ", error);
      throw new Error(error.message);
    }

    return Response.json({ error: error }, { status: 500 });
  }
}
