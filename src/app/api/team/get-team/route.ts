import prisma from "@/lib/prisma";
import { NextRequest as Request, NextResponse as Response } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { User } from "@prisma/client";

export async function GET(req: Request) {
  if (req.method !== "GET") {
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }
  const currUser = await currentUser();
  if (!currUser) {
    return Response.json({ error: "Not authenticated" }, { status: 401 });
  }

  const user: User | null = await prisma.user.findUnique({
    where: { authId: currUser.id },
  });

  if (!user) {
    return Response.json({ error: "User not found" }, { status: 404 });
  }

  const { searchParams } = req.nextUrl;
  const teamSlug = searchParams.get("slug");

  if (!teamSlug || teamSlug === "undefined") {
    const team = await prisma.team.findFirst({
      where: { members: { some: { userId: user.id } } },
      include: {
        members: {
          include: {
            user: true,
          },
        },
      },
    });

    if (!team) {
      return Response.json({ error: "Team not found" }, { status: 404 });
    }

    return Response.json(team);
  } else {
    const team = await prisma.team.findUnique({
      where: { slug: teamSlug },
      include: {
        members: true,
      },
    });

    if (!team) {
      return Response.json({ error: "Team not found" }, { status: 404 });
    }

    return Response.json(team);
  }
}
