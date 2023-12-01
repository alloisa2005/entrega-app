"use client";

import { addToPruebas } from "@/redux/slices/pruebaSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const PruebaPage = () => {

  const dispatch = useDispatch();
  const { cantidad } = useSelector((state) => state.prueba);

  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(addToPruebas({nombre, edad}))
  };

  return (
    <div className="contenedor my-4">
      PruebaPage {cantidad}
      <form onSubmit={handleSubmit} className="mt-4 border p-2">
        <div className="flex flex-col gap-1 mb-4">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            className="p-2 outline-none border rounded-md"
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1 mb-3">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            className="p-2 outline-none border rounded-md"
            type="number"
            placeholder="Edad"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          />
        </div>

        <div className="w-full flex items-center justify-center">
          <button
            className="bg-black text-white py-1 px-4 rounded-md"
            type="submit"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default PruebaPage;
