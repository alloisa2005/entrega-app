"use client";

import React from "react";
import CarritoCard from "./CarritoCard";
import { useSelector } from "react-redux";

const CarritoList = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <>
      {cart?.length === 0 ? (
        <div className=" h-full w-full flex items-center justify-center font-montserrat">
          <p className="text-2xl font-semibold">No tiene productos en el carrito</p>
        </div>
      ) : 
        cart?.map((prod, index) => <CarritoCard key={index} prod={prod} />)}
    </>
  );
};

export default CarritoList;
