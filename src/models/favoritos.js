import { mongoose } from "mongoose";

const favoritosSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    productos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Juego",
      },
    ],
  },
  { timestamps: true }
);

const Favoritos = mongoose.models.Favorito || mongoose.model('Favorito', favoritosSchema)

export default Favoritos;
