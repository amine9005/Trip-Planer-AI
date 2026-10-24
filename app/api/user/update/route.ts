// src/app/api/admin/user/limit/update/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getClient } from "@/db/mongoose";
import mongoose from "mongoose";

const db = await getClient();

export async function POST(
  req: NextRequest,
  // { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { limit, userId } = await req.json();
    // console.log("limit", limit, " userId ", userId);

    if (limit === undefined || limit < 0) {
      return NextResponse.json(
        { message: "Invalid limit value" },
        { status: 400 },
      );
    }
    const user = await db
      .collection("user")
      .findOneAndUpdate(
        { _id: new mongoose.Types.ObjectId(userId) },
        { $set: { limit: limit } },
      );

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    user.limit = limit;
    return NextResponse.json(
      { message: "User data updated successfully", user },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error updating user data:", error);
    return NextResponse.json(
      { message: "Failed to update user data", error: error },
      { status: 500 },
    );
  }
}
