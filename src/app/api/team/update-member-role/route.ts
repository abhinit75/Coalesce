import prisma from "@/lib/prisma";
import { NextRequest as Request, NextResponse as Response } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { Role } from "@prisma/client";

export async function PATCH(req: Request) {
  const user = await currentUser();
  if (!user) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const { teamSlug, memberUserId, newRole } = body as {
    teamSlug: string;
    memberUserId: string;
    newRole: Role;
  };

  if (!teamSlug || !memberUserId || !newRole) {
    return Response.json({ error: "Missing fields" }, { status: 400 });
  }

  const team = await prisma.team.findUnique({ where: { slug: teamSlug } });
  if (!team) return Response.json({ error: "Team not found" }, { status: 404 });

  const dbCurrentUser = await prisma.user.findUnique({
    where: { authId: user.id },
  });
  if (!dbCurrentUser)
    return Response.json({ error: "User not found" }, { status: 404 });

  const actor = await prisma.teamUser.findUnique({
    where: { teamId_userId: { teamId: team.id, userId: dbCurrentUser.id } },
  });
  if (!actor)
    return Response.json({ error: "Not a team member" }, { status: 403 });

  const target = await prisma.teamUser.findUnique({
    where: { teamId_userId: { teamId: team.id, userId: memberUserId } },
  });
  if (!target)
    return Response.json({ error: "Member not found" }, { status: 404 });

  // UI primarily enforces, but add minimal guardrails: members cannot change roles
  if (actor.role === "MEMBER") {
    return Response.json(
      { error: "Insufficient permissions" },
      { status: 403 },
    );
  }

  // Only SUPER_ADMIN can modify another ADMIN or SUPER_ADMIN
  if (
    (target.role === "ADMIN" || target.role === "SUPER_ADMIN") &&
    actor.role !== "SUPER_ADMIN"
  ) {
    return Response.json(
      { error: "Only super admins can modify admins" },
      { status: 403 },
    );
  }

  // Prevent demoting the last SUPER_ADMIN
  if (target.role === "SUPER_ADMIN" && newRole !== "SUPER_ADMIN") {
    const superAdmins = await prisma.teamUser.count({
      where: { teamId: team.id, role: "SUPER_ADMIN" },
    });
    if (superAdmins <= 1) {
      return Response.json(
        { error: "At least one super admin is required" },
        { status: 400 },
      );
    }
  }

  const updated = await prisma.teamUser.update({
    where: { teamId_userId: { teamId: team.id, userId: memberUserId } },
    data: { role: newRole },
  });

  return Response.json({ member: updated }, { status: 200 });
}
