"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Avatar = () => {
  const { data: session } = useSession();
  const { cartTotalItems } = useSelector((state) => state.cart);
  const [isHovered, setIsHovered] = useState(false);  

  const handleHover = () => {
    setIsHovered(!isHovered);
  };  

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <Image
        width={50}
        height={50}
        className="border-2 border-white w-[42px] h-[42px] rounded-full object-cover"
        src={session.user.image}
        alt="Avatar Image"
      />
      {isHovered && (
        <div className="rounded-b-lg text-md font-montserrat w-[155px] absolute top-full left-0 px-3 py-4 z-20 flex flex-col gap-4 bg-black text-white  border-l border-r border-b border-white">
          <p className="border-b border-gray-400">Hola, {session.user.nombre.split(' ')[0]}</p>
          <Link className="hover:cursor-pointer hover:bg-white hover:text-black p-1" href="/carrito">
            Mi Carrito 
            <span className="ml-2 w-5 h-5 p-1 rounded-full text-sm bg-red-500 text-white">{cartTotalItems}</span>
          </Link>
          <Link className="hover:cursor-pointer hover:bg-white hover:text-black p-1" href="/favoritos">Mis Favoritos</Link>
          <Link className="hover:cursor-pointer hover:bg-white hover:text-black p-1" href="/compras">Mis Compras</Link>
          <Link className="hover:cursor-pointer hover:bg-white hover:text-black p-1" href="/user/datos">Mis Datos</Link>
          {
            session?.user?.isAdmin && (
              <Link className="hover:cursor-pointer hover:bg-white hover:text-black p-1" href="/admin/productos">Menu Admin</Link>
            )
          }
          <span onClick={() => signOut()} className="hover:bg-white hover:text-black hover:cursor-pointer p-1">Log Out</span>
        </div>
      )}
    </div>
  );
};

export default Avatar;
