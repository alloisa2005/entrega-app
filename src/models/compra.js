import mongoose from 'mongoose'

const compraSchema = new mongoose.Schema(
  {    
    email: {
      type: String,      
      required: true,      
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
    cantidadProductos: {
      type: Number,      
    },
    subTotal: {
      type: Number,      
    },
    envio: {
      type: Number,      
    },
    montoTotal: {
      type: Number,      
    },    
  },
  { timestamps: true }
);

const Compra = mongoose.models.Compra || mongoose.model("Compra", compraSchema);

export default Compra;