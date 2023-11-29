'use client'

import Image from 'next/image'
import React from 'react'
import CartControls from './CartControls'
import { motion } from 'framer-motion'

const CarritoCard = ({ prod, cantidad }) => {  

  return (
    <div className='w-full  p-2 flex items-center justify-between gap-3'>
      <div className='flex items-center gap-3'>
        <Image 
          src={prod.boxImage} 
          alt={prod.titulo}
          width={100}
          height={100}
          className='w-[70px] object-contain hover:cursor-pointer'
        />
        <div className='flex flex-col gap-2'>
          <motion.p 
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0, x: -200 }}
            className='text-md lg:text-lg italic'>{prod.titulo}</motion.p>
          <p className='text-blue-500 border-b-2 w-fit text-[14px] hover:cursor-pointer'>Eliminar</p>
        </div>
      </div>

      <CartControls prodId={prod._id} precio={prod.precio} cantidad={cantidad}/>
    </div>
  )
}

export default CarritoCard