import { connectDB } from "@/db/connectDB";
import Juego from "@/models/juego";
import { NextResponse } from "next/server";

export const PUT = async (req, { params }) => {

  const { juegoId } = params;
  const { titulo, categoria, precio, descripcion, trailer1, trailer2, trailer3, rating, stock } = await req.json();

  try {
    await connectDB();
    
    const juego = await Juego.findByIdAndUpdate(juegoId, { titulo, categoria, precio, descripcion, trailer1, trailer2, trailer3, rating, stock }, { new: true });
    return NextResponse.json(juego, { status: 201 });
  } catch (error) {
    return NextResponse.json({msg: error.message}, { status: 400 });
  }

}