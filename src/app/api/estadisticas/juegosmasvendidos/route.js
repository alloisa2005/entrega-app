import { connectDB } from "@/db/connectDB";
import Compra from "@/models/compra";
import Juego from "@/models/juego";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {

  try {
    
    await connectDB(); 

    const juegos = await Compra.aggregate([
      {
        $unwind: '$productos'
      },
      {
        $group: {
          _id: '$productos.producto',
          totalVendido: { $sum: '$productos.cantidad' }
        }
      },
      {
        $sort: { totalVendido: -1 }
      },
      {
        $limit: 5
      }
    ]);    
    
    // Armo un array con el nombre de los juegos y la cantidad vendida
    for (let i = 0; i < juegos.length; i++) {
      const juego = await Juego.findById(juegos[i]._id);
      juegos[i].titulo = juego.titulo;
      delete juegos[i]._id;
    }         

    return NextResponse.json(juegos, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

};

