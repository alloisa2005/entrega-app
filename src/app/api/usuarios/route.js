import { NextResponse } from "next/server";
import { connectDB } from "@/db/connectDB";
import User from "@/models/user";
import bcrypt from "bcryptjs";

export const GET = async () => {
  try {
    await connectDB();

    // No devuelvo el password en la respuesta
    const users = await User.find().select("-password");
    return NextResponse.json(users, { status: 201 });
  } catch (error) {
    return NextResponse.json({msg: error.message}, { status: 400 });
  }
};

export const POST = async (req) => {
  const { nombre, email, direccion, password, image } = await req.json();

  try {
    await connectDB();

    const existeUser = await User.findOne({ email });
    if (existeUser) {
      return NextResponse.json({msg: "Email ya se encuentra registrado."}, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ nombre, email, direccion, image, password: hashedPassword });
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return NextResponse.json({msg: error.message}, { status: 400 });
  }
};

export const PUT = async (req) => {
  const { id, direccion } = await req.json();

  try {
    await connectDB();

    const user = await User.findByIdAndUpdate(id, { direccion }, { new: true }).select("-password");
    return NextResponse.json(user, { status: 201 });

  } catch (error) {
    return NextResponse.json({msg: error.message}, { status: 400 });
  }
}
