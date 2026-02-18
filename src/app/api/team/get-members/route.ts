import prisma from "@/lib/prisma";
import { NextRequest as Request, NextResponse as Response } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { z } from "zod";
import { TeamUser, User } from "@prisma/client";

type TeamUserWithUser = TeamUser & { user: User };

const getMembersSchema = z.object({
  teamSlug: z.string(),
});

export async function GET(req: Request) {
  const currUser = await currentUser();

  if (!currUser) {
    return Response.json({ error: "User not authenticated" }, { status: 401 });
  }

  try {
    const { searchParams } = req.nextUrl;
    const teamSlug = searchParams.get("teamSlug");

    if (!teamSlug) {
      return Response.json({ error: "Team slug is required" }, { status: 400 });
    }

    const validatedData = getMembersSchema.parse({ teamSlug });

    // Find the team and verify current user is a member
    const team = await prisma.team.findUnique({
      where: { slug: validatedData.teamSlug },
      include: {
        members: {
          include: {
            user: true,
          },
          orderBy: {
            joinedAt: "desc",
          },
        },
      },
    });

    if (!team) {
      return Response.json({ error: "Team not found" }, { status: 404 });
    }

    // Check if current user is a member of this team
    const currentUserMembership = team.members.find(
      (member: TeamUserWithUser) => member.user.authId === currUser.id,
    );

    if (!currentUserMembership) {
      return Response.json(
        { error: "You are not a member of this team" },
        { status: 403 },
      );
    }

    // Transform the data to match the expected format
    const members = team.members.map((member: TeamUserWithUser) => ({
      id: member.user.id,
      authId: member.user.authId,
      email: member.user.email,
      name: member.user.name,
      role: member.role,
      status: member.user.authId ? "ACTIVE" : "PENDING",
      joinedAt: member.joinedAt,
    }));

    return Response.json({ members }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json(
        { error: "Invalid request parameters", details: error },
        { status: 400 },
      );
    }

    console.error("Error fetching team members:", error);
    return Response.json(
      { error: "An unexpected error occurred" },
      { status: 500 },
    );
  }
}
