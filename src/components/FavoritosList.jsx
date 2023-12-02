"use client";
import React from "react";
import { useSelector } from "react-redux";
import FavoritosCard from "./FavoritosCard";

const FavoritosList = () => {
  const { favoritos } = useSelector((state) => state.favoritos);

  return (
    <>
      {favoritos?.productos?.length === 0 ? (
        <div className="font-semibold font-montserrat h-[200px] flex items-center justify-center">
          <p className="text-xl italic">No ha agregado productos a Favoritos.</p>
        </div>
      ) : (
        <div className="p-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {
            favoritos?.productos?.map((favorito) => (
              <FavoritosCard key={favorito._id} favorito={favorito} />
            ))
          }          
        </div>
      )}
    </>
  );
};

export default FavoritosList;
