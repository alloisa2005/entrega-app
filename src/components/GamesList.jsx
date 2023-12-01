'use client'

import React, { useState } from "react";
import GameCard from "./GameCard";
import { IoSearch } from "react-icons/io5";
import { useRouter } from "next/navigation";

const GamesList = ({ games, params }) => {

  const router = useRouter();

  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value);    
  };  

  const handleSearch = () => {
    if (!searchText) {
      router.replace(`/tienda/categorias/all`);
    } else {
      router.replace(`/tienda/categorias/all?nombre=${searchText}`);
    }
  };

  return (
    <>
      <div className="flex items-center border shadow-md w-full mb-2 rounded-md overflow-hidden">
        <input 
          type="text"
          value={searchText}
          onChange={handleChange}
          placeholder="Buscar por nombre..." 
          className="w-full p-2" 
        />    
        <div onClick={handleSearch} className='bg-gray-400 p-2 text-white' >
          <IoSearch size={25} />
        </div>    
      </div>
      <div className="p-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {games.map((game) => (
          <GameCard key={game._id} game={game} />
        ))}
      </div>
    </>
  );
};

export default GamesList;
