"use client";

import { cortarTexto } from "@/utils/cortarTexto";
import { separadorMiles } from "@/utils/separadorMiles";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import RatingBar from "./RatingBar";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { addToFavoritos } from "@/redux/slices/favoritosSlice";
import MiModal from "./MiModal";
import { BsCartPlusFill } from "react-icons/bs";
import { addToCart } from "@/redux/slices/cartSlice";

const GameCard = ({ game }) => {
  const dispatch = useDispatch();
  const { favoritos } = useSelector((state) => state.favoritos);
  const { data: session } = useSession();

  const [modal, setModal] = useState({ error: false, msg: "" });

  const toggleFav = async () => {
    if (!session?.user) {
      setModal({
        error: true,
        msg: "Debes iniciar sesión para poder agregar a favoritos.",
      });
      return;
    }

    dispatch(
      addToFavoritos({
        usuarioEmail: session?.user?.email,
        productoId: game._id,
      })
    );
  };

  const existeEnFavoritos = (gameId) => {
    if (!favoritos?.productos) return false;
    return favoritos.productos.some((producto) => producto._id == gameId);
  };

  const handleAddToCart = () => {    
    dispatch(
      addToCart({
        usuarioEmail: session?.user?.email,
        productoId: game._id,
        cantidad: 1,
      })
    );
  };

  return (
    <>
      <div
        className="relative rounded-md bg-white shadow-lg w-full hover:scale-105 hover:shadow-lg  ease-out duration-300 border border-gray-300"
        key={game.id}
      >
        <div
          onClick={toggleFav}
          className="hover:cursor-pointer z-10 absolute top-2 right-4 bg-gray-200 w-7 h-7 rounded-full border border-gray-100 flex items-center justify-center"
        >
          {existeEnFavoritos(game._id) ? (
            <MdOutlineFavorite size={17} className="text-red-500" />
          ) : (
            <MdOutlineFavoriteBorder size={17} className="text-red-500" />
          )}
        </div>
        <Link
          href={`/detail/${game._id}`}
          className="p-2 flex justify-center w-full h-[160px] overflow-hidden"
        >
          <Image
            src={game.boxImage}
            alt={game.titulo}
            width={100}
            height={80}
            className="w-[200px] h-full object-contain"
          />
        </Link>

        <div className="px-3 py-2 flex flex-1 flex-col gap-2">
          <div className="flex items-center justify-between">
            <p className="text-[15px] font-bold">
              {cortarTexto(game.titulo, 23)}
            </p>
            <BsCartPlusFill
              onClick={handleAddToCart}
              size={20}
              className="text-red-400 hover:cursor-pointer hover:text-red-600 ease-in duration-300"
            />
          </div>
          <p className="text-sm">
            Plataforma:{" "}
            <span className="text-gray-700 italic">
              {game.categoria.toUpperCase()}
            </span>
          </p>
          <div className="flex justify-between items-center">
            <p className="text-md font-bold">$ {separadorMiles(game.precio)}</p>
            <RatingBar rating={game.rating} />
          </div>
        </div>
      </div>

      {modal.msg && (
        <MiModal
          error={modal.error}
          mensaje={modal.msg}
          closeFn={() => setModal({ error: false, msg: "" })}
        />
      )}
    </>
  );
};

export default GameCard;
