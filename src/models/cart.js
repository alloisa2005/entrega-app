import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {    
    usuarioId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reemplaza 'User' con el nombre del modelo de usuario si lo tienes definido
      required: true,
      unique: true,
    },
    productos: [
      {
        productoId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Juego", // Reemplaza 'Producto' con el nombre del modelo de producto si lo tienes definido
          required: true,
        },
        cantidad: {
          type: Number,
          required: true,
        },
      },
    ],
    montoTotal: {
      type: Number,
      required: true,
    },
    cantidadProductos: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Cart = mongoose.models.Cart || mongoose.model("Cart", cartSchema);

export default Cart;
