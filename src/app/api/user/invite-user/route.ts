import prisma from "@/lib/prisma";
import { NextRequest as Request, NextResponse as Response } from "next/server";
import { clerkClient } from "@clerk/nextjs/server";
import { currentUser } from "@clerk/nextjs/server";

export const POST = async (req: Request) => {
  const currUser = await currentUser();
  const client = await clerkClient();
  if (!currUser) {
    return Response.json({ error: "User not found" }, { status: 404 });
  }
  if (req.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }

  if (!req.body) {
    return Response.json({ error: "Missing body" }, { status: 400 });
  }
  const body = await req.json();

  // retrieve current team id
  const team = await prisma.team.findUnique({
    where: {
      slug: body.teamSlug,
    },
  });

  if (!team || !team.orgId) {
    return Response.json(
      { error: "Team not found. There was an unexpected error" },
      { status: 404 },
    );
  }

  try {
    const dbUser = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    if (dbUser) {
      const existingMember = await prisma.teamUser.findUnique({
        where: {
          teamId_userId: {
            teamId: team.id,
            userId: dbUser.id,
          },
        },
      });

      if (existingMember) {
        return Response.json(
          { error: "User is already a member of this team" },
          { status: 400 },
        );
      }

      await prisma.teamUser.create({
        data: {
          userId: dbUser.id,
          teamId: team.id,
          role: body.role,
        },
      });
    } else {
      const newUser = await prisma.user.create({
        data: {
          name: body.name,
          email: body.email,
        },
      });

      await prisma.teamUser.create({
        data: {
          userId: newUser.id,
          teamId: team.id,
          role: body.role,
        },
      });
    }

    // send invite to user via clerk
    try {
      const redirectUrl = `${process.env.NEXT_PUBLIC_APP_URL}/accept-invitation?teamSlug=${encodeURIComponent(
        body.teamSlug,
      )}`;
      await client.organizations.createOrganizationInvitation({
        organizationId: team.orgId,
        inviterUserId: currUser.id,
        emailAddress: body.email,
        role:
          body.role === "ADMIN" || body.role === "SUPER_ADMIN"
            ? "org:admin"
            : "org:member",
        redirectUrl,
      });
    } catch (e) {
      throw new Error("Failed to send invitation: " + e);
    }

    return Response.json({ response: "Success" }, { status: 200 });
  } catch (error) {
    console.error("Database operation failed:", error);

    return Response.json(
      {
        error: "An unexpected error occurred",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
};
