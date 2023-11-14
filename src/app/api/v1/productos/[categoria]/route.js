import { connectDB } from "@/db/connectDB";
import Juego from "@/models/juego";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {

  const { categoria } = params;
  console.log(categoria)

  try {
    await connectDB();
    
    const juegos = categoria === 'all' ? await Juego.find() : await Juego.find({categoria});
    return NextResponse.json(juegos, { status: 201 });
  } catch (error) {
    return NextResponse.json({msg: error.message}, { status: 400 });
  }
};