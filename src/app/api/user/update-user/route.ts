import prisma from "@/lib/prisma";
import { NextRequest as Request, NextResponse as Response } from "next/server";
import { currentUser } from "@clerk/nextjs/server";

export async function PATCH(req: Request) {
  const user = await currentUser();
  if (!user) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Parse the request body
  const body = await req.json();

  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const updateData: any = {};

    // Process each field in the body
    for (const [key, value] of Object.entries(body)) {
      if (value === null) {
        // If value is null, set the field to null (delete the data)
        updateData[key] = null;
      } else if (typeof value === "object" && !Array.isArray(value)) {
        // If value is an object, use the `set` operation to replace the entire object
        updateData[key] = { set: value };
      } else {
        // For other types (strings, numbers, booleans, arrays), simply update the value
        updateData[key] = value;
      }
    }

    const updatedUser = await prisma.user.update({
      where: { authId: user.id },
      data: updateData,
    });

    return Response.json(updatedUser, { status: 200 });
  } catch (error) {
    console.error("An error occurred:", error);
    return Response.json({ error: "Failed to update user" }, { status: 500 });
  }
}
