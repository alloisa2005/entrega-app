import { connectDB } from "@/db/connectDB";
import User from "@/models/user";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {

  const { userId } = params;  
  
  try {
    await connectDB();

    // no devuelvo el password
    const user = await User.findById(userId).select("-password");
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return NextResponse.json({msg: error.message}, { status: 400 });
  }
};

export const PUT = async (req, { params }) => {

  const { isAdmin, activo } = await req.json();
  const { userId } = params;  
  
  try {
    await connectDB();

    // actualizo y no devuelvo el password
    const user = await User.findByIdAndUpdate(userId, { isAdmin, activo }, { new: true }).select("-password");
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return NextResponse.json({msg: error.message}, { status: 400 });
  }
};