import { connectDB } from "@/db/connectDB";
import Prueba from "@/models/prueba";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {

  try {
    await connectDB();

    const pruebas = await Prueba.find();
    return NextResponse.json(pruebas, { status: 201 });
  } catch (error) {
   return NextResponse.json({msg: error.message}, { status: 400 }); 
  }

};

export const POST = async (req, res) => {

  const { name, age } = await req.json();
  try {
    await connectDB();

    await Prueba.create({name, age});

    const pruebas = await Prueba.find();
    return NextResponse.json(pruebas, { status: 201 });
  } catch (error) {
    return NextResponse.json({msg: error.message}, { status: 400 });
  }
};