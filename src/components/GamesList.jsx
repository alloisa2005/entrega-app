'use client'

import React from "react";
import GameCard from "./GameCard";
import { IoSearch } from "react-icons/io5";
import { useRouter } from "next/navigation";


const GamesList = ({ games, params }) => {

  const router = useRouter();

  const [searchText, setSearchText] = React.useState("");

  const handleSearch = () => {
    if (searchText.trim() === "") {
      router.push(`/tienda/categorias/all`);
    } else {
      router.push(`/tienda/categorias/all?nombre=${searchText}`);
    }
  };

  return (
    <>
      <div className="flex items-center border shadow-md w-full mb-2 rounded-md overflow-hidden">
        <input 
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Buscar por nombre..." 
          className="w-full p-2" 
        />
        <div onClick={handleSearch} className="flex items-center justify-center  h-full bg-gray-400 p-2">
          <IoSearch size={25} className='text-white' />
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
