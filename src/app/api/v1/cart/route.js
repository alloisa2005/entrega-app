import { NextResponse } from "next/server";
import { connectDB } from "@/db/connectDB";
import Cart from "@/models/cart";


export const POST = async (req, { params }) => {  
  const { usuarioId, productoId, cantidad } = await req.json();

  try {
    await connectDB();

    // Busca el carrito existente del usuario
    const carritoExistente = await Cart.findOne({ usuarioId });

    if (carritoExistente) {
      // Verifica si el producto ya está en el carrito
      const productoExistente = carritoExistente.productos.find(
        (producto) => String(producto.productoId) === productoId
      );

      if (productoExistente) {
        // Si el producto ya existe, actualiza la cantidad y el monto total
        productoExistente.cantidad += cantidad;
        carritoExistente.montoTotal += cantidad * productoExistente.precio; // Ajusta según la estructura de tu producto

      } else {
        // Si el producto no existe, agrégalo al carrito
        carritoExistente.productos.push({
          productoId,
          cantidad
        });
        // Actualiza el monto total
        // Necesitarás ajustar esto según la estructura de tu producto
        const productoAgregado = await Producto.findById(productoId);
        carritoExistente.montoTotal += cantidad * productoAgregado.precio;
      }

      // Actualiza la cantidad total de productos en el carrito
      carritoExistente.cantidadProductos += cantidad;

      // Guarda la actualización del carrito
      await carritoExistente.save();

      return NextResponse.json(carritoExistente, { status: 201 });      
    } else {
      // Si no hay carrito existente, crea uno nuevo
      const nuevoCart = new Cart({
        usuarioId,
        productos: [{ productoId, cantidad }],
        montoTotal: 0,  // Puedes ajustar esto según tus necesidades
        cantidadProductos: cantidad
      });

      // Guarda el nuevo carrito en la base de datos
      const cartGuardado = await nuevoCart.save();
      return NextResponse.json(cartGuardado, { status: 201 });      
    }    
  } catch (error) {
    return NextResponse.json({msg: error.message}, { status: 400 });  
  }  
}
