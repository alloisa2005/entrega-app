"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { separadorMiles } from "@/utils/separadorMiles";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { addToCart, deleteProductFromCart } from "@/redux/slices/cartSlice";

const CarritoCard = ({ prod }) => {
  const dispatch = useDispatch();
  const { data: session } = useSession();

  const increment = async () => {
    dispatch(
      addToCart({
        usuarioEmail: session?.user?.email,
        productoId: prod.producto._id,
        cantidad: 1,
      })
    );
  };

  const decrement = async () => {
    dispatch(
      addToCart({
        usuarioEmail: session?.user?.email,
        productoId: prod.producto._id,
        cantidad: -1,
      })
    );
  };

  const deleteProd = async () => {
    dispatch(
      deleteProductFromCart({
        usuarioEmail: session?.user?.email,
        productoId: prod.producto._id,
      })
    );
  };

  return (
    <div className="w-full  p-2 flex items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <Image
          src={prod.producto.boxImage}
          alt={prod.producto.titulo}
          width={100}
          height={100}
          className="w-[70px] object-contain hover:cursor-pointer"
        />
        <div className="flex flex-col gap-2">
          <motion.p
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0, x: -200 }}
            className="text-md lg:text-lg italic"
          >
            {prod.producto.titulo}
          </motion.p>
          <p
            onClick={deleteProd}
            className="italic text-blue-500 hover:font-bold w-fit text-[14px] hover:cursor-pointer ease-in duration-300"
          >
            Eliminar
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
        <div className="flex justify-center items-center border rounded-md overflow-hidden">
          <button
            onClick={decrement}
            className="w-6 h-6 md:w-9 md:h-9 bg-black text-white text-xl"
          >
            -
          </button>
          <p className="w-6 h-6 md:w-9 md:h-9 flex items-center justify-center select-none text-lg">
            {prod.cantidad}
          </p>
          <button
            onClick={increment}
            className="w-6 h-6 md:w-9 md:h-9 bg-black text-white text-lg"
          >
            +
          </button>
        </div>
        <p className="text-xl font-bold">
          ${separadorMiles(prod.producto.precio * prod.cantidad)}
        </p>
      </div>

      {/* <CartControls prodId={prod._id} precio={prod.precio} cantidad={cantidad}/> */}
    </div>
  );
};

export default CarritoCard;
