
import Mensaje from "@/models/mensaje";
import { NextResponse } from "next/server";

export const PUT = async (req, { params }) => {

  try {
    
    const { mensajeId } = params;
    const { leido } = await req.json();
  
    const leidoBoolean = leido === "SI" ? true : false;

    const mensaje = await Mensaje.findByIdAndUpdate(mensajeId, { leido: leidoBoolean }, { new: true })
    return NextResponse.json({ mensaje }, { status: 201 });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

};

export const DELETE = async (req, { params }) => {
  
    try {
      
      const { mensajeId } = params;
  
      const mensaje = await Mensaje.findByIdAndDelete(mensajeId);
      return NextResponse.json({ mensaje }, { status: 201 });
  
    } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
};