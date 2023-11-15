import { connectDB } from "@/db/connectDB";
import { NextResponse } from "next/server";
import Juego from "@/models/juego";

export const GET = async (req, { params }) => {

  const { juegoId } = params;

  try {
    await connectDB();
    
    const juego = await Juego.findById(juegoId);
    return NextResponse.json(juego, { status: 201 });
  } catch (error) {
    return NextResponse.json({msg: error.message}, { status: 400 });
  }

}