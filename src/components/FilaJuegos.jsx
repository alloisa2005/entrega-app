import { getProductosOrdenados } from '@/utils/juegos/juegos'
import Image from 'next/image';
import React from 'react'

const FilaJuegos = async ({ titulo, filtro }) => {

  const games = await getProductosOrdenados(filtro)
  console.log(games);

  return (
    <div className='bg-black'>
      <div className='contenedor text-white py-8'>
        <h2 className='text-2xl border-b uppercase italic'>{titulo}</h2>

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
          {games.map((game) => (
            <div key={game.id} className='bg-white text-black'>
              <Image src={game.boxImage} alt={game.titulo} width={120} height={80} className='w-full object-cover' />
              <div className='p-4'>
                <h3 className='text-xl font-bold'>{game.titulo}</h3>                
              </div>
            </div>
          ))}
      </div>
    </div>
    </div>
  )
}

export default FilaJuegos