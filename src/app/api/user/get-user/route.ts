import prisma from "@/lib/prisma";
import { NextRequest as Request, NextResponse as Response } from "next/server";
import { currentUser } from "@clerk/nextjs/server";

export async function GET(req: Request) {
  const user = await currentUser();
  if (req.method !== "GET") {
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }

  if (!user) {
    return Response.json({ error: "User not found" }, { status: 404 });
  }

  const dbUser = await prisma.user.findUnique({
    where: { authId: user.id },
    include: {
      teams: {
        include: {
          team: true,
        },
      },
    },
  });

  if (!dbUser) {
    return Response.json({ error: "User not found" }, { status: 404 });
  }

  return Response.json(dbUser, { status: 200 });
}
