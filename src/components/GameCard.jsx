import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const GameCard = ({ game }) => {
  return (
    <Link href={`/detail/${game.id}`} className="rounded-md bg-white shadow-md w-full hover:scale-105 hover:shadow-lg hover:cursor-pointer ease-out duration-300" key={game.id} >
      <div className="p-2 flex justify-center w-full h-[160px]">
        <Image src={game.image} alt={game.name} width={100} height={80} className='w-[200px] h-full object-contain'/>
      </div>

      <div className="px-3 py-2 flex flex-1 flex-col gap-2">
        <p className="font-bold">{game.name}</p>
        <p className="text-sm">Categoría: <span className="text-gray-700 italic">{game.category}</span></p>
        <p className="text-md font-bold">$ {game.price}</p>
      </div>
    </Link>
  )
}

export default GameCard