import mongoose from "mongoose";

const mensajeSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Por favor ingrese su email"],      
      trim: true,
    }, 
    nombre: {
      type: String,
      required: [true, "Por favor ingrese su nombre"],
      trim: true,
    },      
    asunto: {
      type: String,
      required: [true, "Por favor ingrese el asunto del mensaje"],
      trim: true,
    },   
    mensaje: {
      type: String,
      maxlength: [250, "El mensaje no puede exceder los 250 caracteres"],
      required: [true, "Por favor ingrese el mensaje"],
      trim: true,
    },    
    leido: {
      type: Boolean,
      default: false,
    },           
  },
  { timestamps: true }
);

const Mensaje = mongoose.models.Mensaje || mongoose.model("Mensaje", mensajeSchema);

export default Mensaje;