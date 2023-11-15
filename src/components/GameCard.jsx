import { cortarTexto } from '@/utils/cortarTexto'
import { separadorMiles } from '@/utils/separadorMiles'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const GameCard = ({ game }) => {
  return (
    <Link href={`/detail/${game._id}`} className="rounded-md bg-white shadow-md w-full hover:scale-105 hover:shadow-lg hover:cursor-pointer ease-out duration-300" key={game.id} >
      <div className="p-2 flex justify-center w-full h-[160px]">
        <Image src={game.boxImage} alt={game.titulo} width={100} height={80} className='w-[200px] h-full object-contain'/>
      </div>

      <div className="px-3 py-2 flex flex-1 flex-col gap-2">
        <p className="font-bold">{cortarTexto(game.titulo, 23)}</p>
        <p className="text-sm">Categoría: <span className="text-gray-700 italic">{game.categoria.toUpperCase()}</span></p>
        <p className="text-md font-bold">$ {separadorMiles(game.precio)}</p>
      </div>
    </Link>
  )
}

export default GameCard