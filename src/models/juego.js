import mongoose from 'mongoose'

const juegoSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },  
  categoria: {
    type: String,
    required: true,
    trim: true,
    maxlength: 25,
  },    
  descripcion: {
    type: String,
    required: true,
    trim: true,
    maxlength: 1000,    
  },
  precio: {
    type: Number,
    required: true,
    trim: true,
    maxlength: 6,    
  },  
  trailer1: {
    type: String,
  },
  trailer2: {
    type: String,
  },
  trailer3: {
    type: String,
  },
  boxImage: {
    type: String,
  },
  posterImage: {
    type: String,
  },
  rating: {
    type: Number,    
    trim: true,
  },
  stock: {
    type: Number,    
    trim: true,
    default: 0,
  },
}, { timestamps: true})

const Juego = mongoose.models.Juego || mongoose.model('Juego', juegoSchema)

export default Juego;