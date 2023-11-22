'use client'

import { cortarTexto } from '@/utils/cortarTexto'
import { separadorMiles } from '@/utils/separadorMiles'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import RatingBar from './RatingBar'
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";

const GameCard = ({ game }) => {

  const [isFav, setIsFav] = useState(false)

  const toggleFav = () => {
    setIsFav(!isFav)
  }

  return (
    <div className="relative rounded-md bg-white shadow-lg w-full hover:scale-105 hover:shadow-lg hover:cursor-pointer ease-out duration-300 border border-gray-300" key={game.id} >
      <div onClick={toggleFav} className='z-20 absolute top-2 right-4 bg-gray-200 w-7 h-7 rounded-full border border-gray-100 flex items-center justify-center'>
        {
          isFav ? (
            <MdOutlineFavorite size={17} className='text-red-500'/>
          ) : (
            <MdOutlineFavoriteBorder size={17} className='text-red-500'/>
          )
        }
      </div>
      <Link href={`/detail/${game._id}`} className="p-2 flex justify-center w-full h-[160px] overflow-hidden">
        <Image src={game.boxImage} alt={game.titulo} width={100} height={80} className='w-[200px] h-full object-contain'/>
      </Link>

      <Link href={`/detail/${game._id}`} className="px-3 py-2 flex flex-1 flex-col gap-2">
        <p className="text-[15px] font-bold">{cortarTexto(game.titulo, 23)}</p>
        <p className="text-sm">Plataforma: <span className="text-gray-700 italic">{game.categoria.toUpperCase()}</span></p>
        <div className='flex justify-between items-center'>
          <p className="text-md font-bold">$ {separadorMiles(game.precio)}</p>
          <RatingBar rating={game.rating} />
        </div>
      </Link>
    </div>
  )
}

export default GameCard