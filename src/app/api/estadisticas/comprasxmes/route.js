import { connectDB } from "@/db/connectDB";
import Compra from "@/models/compra";
import { nombreMes } from "@/utils/nombreMes";
import { NextResponse } from "next/server"

export const GET = async (req, res) => {

  try {

    await connectDB();

    // Obtener las compras agrupadas por mes de los ultimos 6 meses en base al campo createdAt y que devuelva el nombre del mes y el año
    const compras = await Compra.aggregate([
      {
        $match: {
          createdAt: {
            $gte: new Date(new Date().setMonth(new Date().getMonth() - 6))
          }
        }
      },
      {
        $group: {
          _id: {
            mes: { $month: "$createdAt" },
            anio: { $year: "$createdAt" }
          },
          total: { $sum: "$montoTotal" }
        }
      },
      {
        $project: {
          _id: 0,
          mes: "$_id.mes",
          anio: "$_id.anio",
          total: 1
        }
      },
      {
        $sort: {
          anio: 1,
          mes: 1
        }
      }
    ]);

    // Cambio el nro de mes por el nombre usando la función nombreMes
    compras.forEach(compra => {
      compra.mes = nombreMes(compra.mes);
    });        

    return NextResponse.json(compras, { status: 201 });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

}