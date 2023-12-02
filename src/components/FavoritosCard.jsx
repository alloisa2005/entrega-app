'use client'

import Image from "next/image";
import Link from "next/link";
import React from "react";
import RatingBar from "./RatingBar";
import { cortarTexto } from "@/utils/cortarTexto";
import { separadorMiles } from "@/utils/separadorMiles";
import { useDispatch } from "react-redux";
import { useSession } from "next-auth/react";
import { addToFavoritos } from "@/redux/slices/favoritosSlice";

const FavoritosCard = ({ favorito }) => {
  const dispatch = useDispatch()
  const { data: session } = useSession()
  
  const removeFromFav = () => {    
    dispatch(
      addToFavoritos({
        usuarioEmail: session?.user?.email,
        productoId: favorito._id,
      })
    );
  }

  return (
    <div className="overflow-hidden relative rounded-md bg-white shadow-lg w-full hover:scale-105 hover:shadow-lg hover:cursor-pointer ease-out duration-300 border border-gray-300" >      
      <Link
        href={`/detail/${favorito._id}`}
        className="p-2 flex justify-center w-full h-[160px] overflow-hidden"
      >
        <Image
          src={favorito.boxImage}
          alt={favorito.titulo}
          width={100}
          height={80}
          className="w-[200px] h-full object-contain"
        />
      </Link>

      <Link
        href={`/detail/${favorito._id}`}
        className="px-3 py-2 flex flex-1 flex-col gap-2"
      >
        <p className="text-[15px] font-bold">{cortarTexto(favorito.titulo, 23)}</p>
        <p className="text-sm">
          Plataforma:{" "}
          <span className="text-gray-700 italic">
            {favorito.categoria.toUpperCase()}
          </span>
        </p>
        <div className="flex justify-between items-center">
          <p className="text-md font-bold">$ {separadorMiles(favorito.precio)}</p>
          <RatingBar rating={favorito.rating} />
        </div>        
      </Link>
      <div onClick={removeFromFav} className="bg-black flex items-center justify-center py-1 text-white">
        <p>Quitar</p>
      </div>
    </div>
  );
};

export default FavoritosCard;
