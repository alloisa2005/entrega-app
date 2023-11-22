import { connectDB } from "@/db/connectDB"
import Favoritos from "@/models/favoritos";
import { NextResponse } from "next/server"

export const GET = async (req, { params }) => {

  const { userId } = params;

  try {
    await connectDB();

    let favoritos = await Favoritos.findOne({ userId });
    return NextResponse.json(favoritos, { status: 200 });
    
  } catch (error) {
    return NextResponse.json({msg: error.message}, {status: 400})
  }


}