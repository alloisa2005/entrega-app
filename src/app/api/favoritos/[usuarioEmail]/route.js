import { connectDB } from "@/db/connectDB"
import Favoritos from "@/models/favoritos";
import { NextResponse } from "next/server"

export const GET = async (req, { params }) => {

  const { usuarioEmail } = params;

  try {
    await connectDB();

    let favoritos = await Favoritos.findOne({ email: usuarioEmail }).populate("productos");            
    return NextResponse.json(favoritos, { status: 200 });
    
  } catch (error) {
    return NextResponse.json({msg: error.message}, {status: 400})
  }


}