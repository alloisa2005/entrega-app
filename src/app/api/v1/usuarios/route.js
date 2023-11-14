
import { NextResponse } from "next/server";
import { connectDB } from "@/db/connectDB";
import User from "@/models/user";

export const GET = async () => {

    try {
      await connectDB();

      const users = await User.find();
      return NextResponse.json(users, { status: 201 });
    } catch (error) {
      return NextResponse.json(users, { status: 400 });
    }
};