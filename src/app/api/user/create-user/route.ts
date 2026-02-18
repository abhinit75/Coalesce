import { Webhook } from "svix";
import { WebhookEvent } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import { NextRequest as Request, NextResponse as Response } from "next/server";

export const POST = async (req: Request) => {
  if (req.method !== "POST") {
    return Response.json({ error: "Method not allowed" });
  }
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
  const WEBHOOK_SECRET = process.env.USER_CREATED_WEBHOOK_SECRET;
  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local",
    );
  }

  if (!req.headers) {
    return Response.json({ error: "Missing SVIX ID header" });
  }
  const svix_id = req.headers.get("svix-id") ?? "";
  const svix_timestamp = req.headers.get("svix-timestamp") ?? "";
  const svix_signature = req.headers.get("svix-signature") ?? "";

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return Response.json({ error: "Missing SVIX headers" });
  }

  // Get the body
  const body = await req.text();

  // Create a new Svix instance with your secret.s
  const wh = new Webhook(WEBHOOK_SECRET);
  // Verify the payload with the headers
  try {
    wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    return Response.json({ Error: err });
  }
  const data = JSON.parse(body).data;

  const userData = {
    email: data.email_addresses[0].email_address,
    name: `${data.first_name} ${data.last_name}`,
    authId: data.id,
  };

  // Check if user with email ID exists:
  const user = await prisma.user.findUnique({
    where: {
      email: data.email_addresses[0].email_address,
    },
  });

  if (user) {
    // Link invited user by email if authId is missing
    if (user.authId === null) {
      await prisma.user.update({
        where: {
          email: data.email_addresses[0].email_address,
        },
        data: {
          name: `${data.first_name} ${data.last_name}`,
          authId: data.id,
        },
      });

      return Response.json({ response: "Success" });
    }

    if (user.authId !== userData.authId) {
      return Response.json({
        error: "User with this email already exists with a different auth Id.",
      });
    }

    await prisma.user.update({
      where: {
        email: data.email_addresses[0].email_address,
      },
      data: userData,
    });

    return Response.json({ response: "Success" });
  } else {
    // Should now create user
    const createdUser = await prisma.user.create({
      data: userData,
    });

    if (!createdUser) {
      return Response.json({ error: "Failed to create user" });
    }

    return Response.json({ response: "Success" });
  }
};
