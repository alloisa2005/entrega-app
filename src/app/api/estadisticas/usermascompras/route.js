import { connectDB } from "@/db/connectDB";
import Compra from "@/models/compra";
import { NextResponse } from "next/server";
import User from "@/models/user";

export const GET = async (req, res) => {

  try {
    await connectDB();

    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 12);

    // Obtener los usuarios que mas compraron en los ultimos 6 meses en base al campo createdAt y que devuelva el nombre del usuario y el total de compras
    const compras = await Compra.aggregate([
      {
        $match: {
          createdAt: { $gte: sixMonthsAgo }
        }
      },
      {
        $group: {
          _id: '$email',
          totalCompras: { $sum: 1 },
          cantidadTotal: { $sum: '$cantidadProductos' },
          montoTotal: { $sum: '$montoTotal' }
        }
      }, 
      {
        $sort: { totalCompras: -1 }
      },
      {
        $limit: 5
      }      
    ]);

    // a partir del email del usuario obtenemos el nombre
    for (let i = 0; i < compras.length; i++) {
      const compra = compras[i];
      const usuario = await User.findOne({ email: compra._id });
      compra.nombre = usuario.nombre;
    }
    
    return NextResponse.json(compras, { status: 201 });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

};