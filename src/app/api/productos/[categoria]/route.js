import { connectDB } from "@/db/connectDB";
import Juego from "@/models/juego";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {

  const urlParams = new URLSearchParams(req.url.slice(req.url.indexOf('?')));
  const nombre = urlParams.get('nombre');  

  const { categoria } = params;  

  try {
    await connectDB();
    
    if(nombre){
      const juegos = await Juego.find({titulo: {
        $regex: nombre,
        $options: 'i'
      }});      
      
      return NextResponse.json(juegos, { status: 201 });
    }

    const juegos = categoria === 'all' ? await Juego.find() : await Juego.find({categoria});
    return NextResponse.json(juegos, { status: 201 });
  } catch (error) {
    return NextResponse.json({msg: error.message}, { status: 400 });
  }
};