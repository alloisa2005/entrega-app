"use client";

import React from "react";
import { useSession } from "next-auth/react";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "@/redux/slices/cartSlice";

const CarritoTitle = () => {
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const { cartTotalItems } = useSelector((state) => state.cart);
  
  const handleDeleteCart = () => {
    dispatch(clearCart(session?.user?.email));
  };

  return (
    <div className="border-b-2 border-black flex items-center gap-14 italic">
      <p className="text-2xl">Mi Carrito</p>
      {cartTotalItems > 0 && (
        <div
          onClick={handleDeleteCart}
          className="flex items-center gap-1 text-blue-500 hover:cursor-pointer hover:underline"
        >
          <FaTrash size={16} />
          <p className="font-bold text-md">Eliminar Carrito</p>
        </div>
      )}
    </div>
  );
};

export default CarritoTitle;
