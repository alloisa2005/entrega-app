import { connectDB } from "@/db/connectDB";
import Compra from "@/models/compra";
import Juego from "@/models/juego";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {

  const { usuarioEmail } = params;

  try {
    await connectDB();

    let compras = await Compra.find({ email: usuarioEmail }).populate("productos.producto").sort({ createdAt: -1 });        

    return NextResponse.json(compras, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};