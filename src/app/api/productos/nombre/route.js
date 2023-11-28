
import { connectDB } from '@/db/connectDB';
import Juego from '@/models/juego';
import { NextResponse } from 'next/server';


export const GET = async (req, { params }) => {

  // ej: http://localhost:3000/api/v1/productos/nombre?query=nombreJuego
  const query = req.nextUrl.searchParams.get("query");
  

  try {
    await connectDB();
    const games = await Juego.find({titulo: {
      $regex: query,
      $options: 'i'
    }});

    return NextResponse.json(games, { status: 201 });
  } catch (error) {
    return NextResponse.json({msg: error.message}, { status: 400 });
  }

}