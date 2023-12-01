import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {    
    email: {
      type: String,      
      required: true,
      unique: true,
    },
    productos: [
      {
        producto: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Juego", 
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
    },
    cantidadProductos: {
      type: Number,      
    },
  },
  { timestamps: true }
);

const Cart = mongoose.models.Cart || mongoose.model("Cart", cartSchema);

export default Cart;
