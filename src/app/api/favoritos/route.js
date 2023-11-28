import { connectDB } from "@/db/connectDB";
import Favoritos from "@/models/favoritos";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { userId, juegoId } = await req.json();
  try {
    await connectDB();

    let favoritos = await Favoritos.findOne({ userId });

    if (!favoritos) {
      favoritos = await Favoritos.create({ userId });
    }

    if (!favoritos.productos.includes(juegoId)) {
      // Agregar el producto a la lista de favoritos
      favoritos.productos.push(juegoId);

      // Guardar el documento Favoritos actualizado
      await favoritos.save();

      return NextResponse.json({ msg: "Producto agregado a favoritos" },{ status: 201 });
    } else {
      return NextResponse.json({ msg: "El producto ya se encuentra en favoritos" },{ status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ msg: error.message }, { status: 400 });
  }
};

export const DELETE = async (req) => {

  const { userId, juegoId } = await req.json();

  try {
    await connectDB();

    let favoritos = await Favoritos.findOne({ userId });

    if (favoritos && favoritos.productos.includes(juegoId)) {
      // Quitar el producto de la lista de favoritos
      favoritos.productos = favoritos.productos.filter(id => id !== juegoId);

      // Guardar el documento Favoritos actualizado
      await favoritos.save();
      
      return NextResponse.json({ msg: "Producto eliminado de favoritos" },{ status: 200 });
    } else {
      return NextResponse.json({ msg: "El producto no se encuentra en favoritos" },{ status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ msg: error.message }, { status: 400 });
  }


};