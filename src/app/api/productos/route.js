import { connectDB } from "@/db/connectDB";
import Juego from "@/models/juego";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { titulo, categoria, precio, descripcion, trailer1, trailer2, trailer3, rating,
    cardImage, bgImage, stock } = await req.json();

  try {
    await connectDB();    

    const juego = await Juego.create({
      titulo, categoria, precio, descripcion, trailer1, trailer2, trailer3, rating, boxImage: cardImage, posterImage: bgImage, stock
    });
    return NextResponse.json(juego, { status: 201 });

  } catch (error) {
    return NextResponse.json({msg: error.message}, { status: 400 });
  }
};