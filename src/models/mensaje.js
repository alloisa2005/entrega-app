import mongoose from "mongoose";

const mensajeSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please enter your email"],      
      trim: true,
    }, 
    nombre: {
      type: String,
      required: [true, "Please enter your name"],
      trim: true,
    },        
    mensaje: {
      type: String,
      maxlength: [250, "Your message cannot exceed 500 characters"],
      required: [true, "Please enter your message"],
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