import { connectDB } from "@/db/connectDB";
import Compra from "@/models/compra";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {

  const { usuarioEmail } = params;

  try {
    await connectDB();

    const compras = await Compra.find({ email: usuarioEmail });

    return NextResponse.json(compras, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};