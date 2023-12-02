import { connectDB } from "@/db/connectDB";
import Favoritos from "@/models/favoritos";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  
  const { usuarioEmail, productoId } = await req.json();  

  try {
    await connectDB();

    let favoritos = await Favoritos.findOne({ email: usuarioEmail });

    if (!favoritos) {
      favoritos = await Favoritos.create({ email: usuarioEmail });
    }

    if (!favoritos.productos.includes(productoId)) {
      // Agregar el producto a la lista de favoritos
      favoritos.productos.push(productoId);

      // Guardar el documento Favoritos actualizado
      await favoritos.save();      
    } else {
      // Si existe el producto en la lista de favoritos, quitarlo
      favoritos.productos = favoritos.productos.filter(prod => prod._id.toString() !== productoId);
      await favoritos.save(); 
    }

    const favoritosUser = await Favoritos.findOne({ email: usuarioEmail }).populate("productos");  
    return NextResponse.json( favoritosUser, { status: 201 });

  } catch (error) {
    return NextResponse.json({ msg: error.message }, { status: 400 });
  }
};

