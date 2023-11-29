import { connectDB } from "@/db/connectDB";
import Cart from "@/models/cart";
import { NextResponse } from "next/server";


export const GET = async (req, { params }) => {

  const { usuarioId } = params;

  try {
    await connectDB();

    const cart = await Cart.findOne({ usuarioId }).populate("productos.productoId");        
    
    return NextResponse.json(cart, { status: 201 });
    
  } catch (error) {
    return NextResponse.json({ msg: error.message }, { status: 500 });
  }
};