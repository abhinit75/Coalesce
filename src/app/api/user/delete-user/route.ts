import { NextRequest as Request, NextResponse as Response } from "next/server";
import { clerkClient } from "@clerk/nextjs/server";
import { currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
export async function DELETE(req: Request) {
  const user = await currentUser();
  const client = await clerkClient();

  if (req.method !== "DELETE") {
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }

  const { searchParams } = req.nextUrl;
  const id = searchParams.get("id");
  const authId = searchParams.get("authId");
  const email = searchParams.get("email");

  if (!id || !authId) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    // Start a transaction to ensure atomic operations
    await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      // Delete TeamUser entries
      await tx.teamUser.deleteMany({
        where: { userId: id },
      });

      // Delete User entry
      await tx.user.delete({
        where: { id: id },
      });
    });

    // Delete user from Clerk
    if (authId != "null") {
      await client.users.deleteUser(authId);
      return Response.json({ message: "Success" }, { status: 200 });
    }

    // else: revoke user invitation
    const orgList = await client.users.getOrganizationMembershipList({
      userId: user!.id,
    });

    const orgId = orgList.data[0]?.organization.id;
    if (!orgId) {
      return Response.json({ error: "No organization found" }, { status: 400 });
    }

    const invitation = await client.organizations
      .getOrganizationInvitationList({
        organizationId: orgId,
      })
      .then((res) => res.data.filter((i) => i.emailAddress === email)[0]);

    if (invitation) {
      await client.organizations.revokeOrganizationInvitation({
        organizationId: orgId,
        invitationId: invitation.id,
        requestingUserId: user!.id,
      });
    }

    return Response.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.error("An error occurred:", error);
    return Response.json({ message: "Failed to delete user" }, { status: 500 });
  }
}
