import Image from 'next/image'
import React from 'react'
import CartControls from './CartControls'

const CarritoCard = () => {
  return (
    <div className='w-full  p-2 flex items-center justify-between gap-3'>
      <div className='flex items-center gap-3'>
        <Image 
          src={'https://m.media-amazon.com/images/M/MV5BNmY2ZDFlZWUtZjliZi00ZGFiLTgxYTYtYTU1MTgwYjMzNDkyXkEyXkFqcGdeQXVyMTI1Mzg0ODA5._V1_.jpg'} 
          alt='juego'
          width={100}
          height={100}
          className='w-[70px] object-contain hover:cursor-pointer'
        />
        <div className='flex flex-col gap-2'>
          <p className='text-md lg:text-lg italic'>Mortal Kombat 11</p>
          <p className='text-blue-500 border-b-2 w-fit text-[13px] hover:cursor-pointer'>Eliminar</p>
        </div>
      </div>

      <CartControls />
    </div>
  )
}

export default CarritoCard