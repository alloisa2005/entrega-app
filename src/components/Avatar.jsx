"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Avatar = () => {
  const { data: session } = useSession();
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
        <div className="rounded-b-lg text-md font-montserrat w-[135px] absolute top-full left-0 p-3 z-20 flex flex-col gap-3 bg-black text-white">
          <Link className="hover:cursor-pointer" href="/carrito">Mi Carrito</Link>
          <Link className="hover:cursor-pointer" href="/favoritos">Mis Favoritos</Link>
          <Link className="hover:cursor-pointer" href="/">Mis Compras</Link>
          <Link className="hover:cursor-pointer" href="/">Mis Datos</Link>
          <span onClick={() => signOut()} className="hover:cursor-pointer">Log Out</span>
        </div>
      )}
    </div>
  );
};

export default Avatar;
