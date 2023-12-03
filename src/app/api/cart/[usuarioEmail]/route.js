import { connectDB } from "@/db/connectDB";
import Cart from "@/models/cart";
import { NextResponse } from "next/server";

export const GET = async (_, { params }) => {

  const { usuarioEmail } = params;

  try {
    await connectDB();
    let cart = {};
    const userCart = await Cart.findOne({ email: usuarioEmail }).populate("productos.producto");

    if (!userCart) {
      cart.cart = [];
      cart.cartTotalAmount = 0;
      cart.cartTotalItems = 0;
    } else {
      cart.cart = userCart.productos;
      cart.cartTotalAmount = userCart.montoTotal;
      cart.cartTotalItems = userCart.cantidadProductos;
    }

    return NextResponse.json(cart, { status: 201 });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }


};

export const DELETE = async (req, { params }) => {

  const { usuarioEmail } = params;

  try {
    await connectDB();

    const userCart = await Cart.findOneAndDelete({ email: usuarioEmail });
    return NextResponse.json(userCart, { status: 201 });
    
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }


}