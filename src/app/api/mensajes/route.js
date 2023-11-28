import { connectDB } from "@/db/connectDB";
import Mensaje from "@/models/mensaje";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {

  const urlParams = new URLSearchParams(req.url.slice(req.url.indexOf('?')));
  const leido = urlParams.get('leido');

  try {
    await connectDB();
    
    const mensajes = await Mensaje.find(leido ? {leido: true} : {}).sort({createdAt: -1});
    return NextResponse.json(mensajes, { status: 201 });
  } catch (error) {
    return NextResponse.json({msg: error.message}, { status: 400 });
  }
};

export const POST = async (req, res) => {  
  try {
    const { email, nombre, asunto, mensaje } = await req.json();
    await connectDB();
    
    const mensajeRes = await Mensaje.create({ email, nombre, asunto, mensaje });
    return NextResponse.json(mensajeRes, { status: 201 });
  } catch (error) {
    return NextResponse.json({msg: error.message}, { status: 400 });
  }
};