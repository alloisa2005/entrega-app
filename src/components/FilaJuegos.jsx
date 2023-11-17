import { cortarTexto } from '@/utils/cortarTexto';
import { getProductosOrdenados } from '@/utils/juegos/juegos'
import Image from 'next/image';
import React from 'react'
import RatingBar from './RatingBar';

const FilaJuegos = async ({ titulo }) => {

  const gamesLatest = await getProductosOrdenados('latest')    
  const gamesRatings = await getProductosOrdenados('rating')    

  return (
    <div className='bg-black'>
      <div className='contenedor text-white py-5'>
        <h2 className='font-montserrat text-2xl font-semibold border-b uppercase italic'>{titulo}</h2>

        <div className='mt-5 grid grid-cols-2 lg:grid-cols-4 gap-4'>
          {gamesLatest && gamesLatest.map((game) => (
            <div key={game._id} className='w-full bg-black'>
              <div className='w-full h-[240px] p-2 bg-black'>
                <Image src={game.boxImage} alt={game.titulo} width={120} height={60} className='w-full h-full object-contain rounded-md'  />
              </div>
              <div className='flex flex-col items-center bg-black text-white'>
                <p className='font-montserrat font-semibold text-md'>{cortarTexto(game.titulo,20)}</p>                
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='contenedor text-white py-5'>
        <h2 className='font-montserrat text-2xl font-semibold border-b uppercase italic'>{titulo}</h2>

        <div className='mt-5 grid grid-cols-2 lg:grid-cols-4 gap-4'>
          {gamesRatings && gamesRatings.map((game) => (
            <div key={game._id} className='w-full bg-black'>
              <div className='w-full h-[240px] p-2 bg-black'>
                <Image src={game.boxImage} alt={game.titulo} width={120} height={60} className='w-full h-full object-contain rounded-md'  />
              </div>
              <div className='flex flex-col items-center bg-black text-white'>
                <p className='font-montserrat font-semibold text-md'>{cortarTexto(game.titulo,20)}</p>
                <RatingBar rating={game.rating} />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default FilaJuegos