import { connectDB } from "@/db/connectDB";
import Juego from "@/models/juego";
import { NextResponse } from "next/server";

export const GET = async (_, { params }) => {
  const { filtro } = params;

  try {
    await connectDB();
    
    const juegos =
      filtro === "rating"
        ? await Juego.find().sort({ rating: -1 }).limit(4) 
        : await Juego.find().sort({ createdAt: -1 }).limit(4)

    return NextResponse.json(juegos, { status: 201 });
  } catch (error) {
    return NextResponse.json({ msg: error.message }, { status: 400 });
  }
};
