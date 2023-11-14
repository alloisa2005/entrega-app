import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true,
      trim: true,
    },
    password: {
      type: String,      
      minLength: [5, "La contraseña debe tener al menos 5 caracteres"],      
    },
    nombre: {
      type: String,
      required: [true, "Please enter your name"],
      maxLength: [40, "Your name cannot exceed 30 characters"],
      trim: true,
    },
    image: {
      type: String,
    },
    direccion: {
      type: String,
      trim: true,
    },   
    isAdmin: {
      type: Boolean,
      default: false,
    },  
    activo: {
      type: Boolean,
      default: true,
    },           
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;