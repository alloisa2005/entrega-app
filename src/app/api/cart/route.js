import { connectDB } from "@/db/connectDB";
import Cart from "@/models/cart";
import Juego from "@/models/juego";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {

  const { usuarioEmail, productoId, cantidad } = await req.json();

  try {
    
    await connectDB();

    // Buscar el carrito del usuario por su email
    let carrito = await Cart.findOne({ email: usuarioEmail });

    // Si el carrito no existe, crear uno nuevo
    if (!carrito) {
      carrito = new Cart({ email: usuarioEmail, productos: [], montoTotal: 0, cantidadProductos: 0 });
    }

    // Verificar si el producto ya está en el carrito
    const productoExistente = carrito.productos.find(
      (producto) => producto.producto.toString() === productoId
    );    

    // Si el producto ya está en el carrito, aumentar su cantidad
    if (productoExistente) {
      productoExistente.cantidad += cantidad;
    } else {
      // Si el producto no está en el carrito, agregarlo con cantidad 
      carrito.productos.push({ producto: productoId, cantidad });
    }

    // Calcular el monto total y la cantidad total de productos en el carrito
    carrito.montoTotal = 0;
    carrito.cantidadProductos = 0;

    for (let producto of carrito.productos) {          
      const juego = await Juego.findById(producto.producto);
      carrito.montoTotal += juego.precio * producto.cantidad;
      carrito.cantidadProductos += producto.cantidad;
    }
    
    // Guardar los cambios en el carrito
    await carrito.save();

    let cartPrueba = await Cart.findOne({ email: usuarioEmail }).populate("productos.producto");
    return NextResponse.json(cartPrueba, { status: 201 });

  } catch (error) {
   return NextResponse.json({ error: error.message }, { status: 500 }); 
  }

}

export const DELETE = async (req, res) => {

  const { usuarioEmail, productoId } = await req.json();

  // borrar un producto del carrito
  try {
    await connectDB();

    // Buscar el carrito del usuario por su email
    let carrito = await Cart.findOne({ email: usuarioEmail });    

    // Verificar si el producto ya está en el carrito
    const productoExistente = carrito.productos.find(
      (producto) => producto.producto.toString() === productoId
    );

    // Si el producto ya está en el carrito, eliminarlo
    if (productoExistente) {      
      carrito.productos = carrito.productos.filter(
        (producto) => producto.producto.toString() !== productoId
      );
    }

    // Calcular el monto total y la cantidad total de productos en el carrito
    carrito.montoTotal = 0;
    carrito.cantidadProductos = 0;

    for (let producto of carrito.productos) {
      const juego = await Juego.findById(producto.producto);
      carrito.montoTotal += juego.precio * producto.cantidad;
      carrito.cantidadProductos += producto.cantidad;
    }

    // Guardar los cambios en el carrito
    await carrito.save();

    let cartPrueba = await Cart.findOne({ email: usuarioEmail }).populate("productos.producto");
    return NextResponse.json(cartPrueba, { status: 201 });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

}