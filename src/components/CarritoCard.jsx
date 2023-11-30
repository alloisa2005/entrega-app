'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { separadorMiles } from '@/utils/separadorMiles'
import { useSession } from 'next-auth/react'
import { useDispatch } from 'react-redux'
import { addToCartSlice, getUserCart } from '@/redux/slices/cartSlice'
import { addToCartAPI } from '@/utils/cart/cart'


const CarritoCard = ({ prod }) => {  
  
  const dispatch = useDispatch();  
  const { data: session } = useSession();        
  const [cantidad, setCantidad] = useState(prod.cantidad);  

  const increment = async () => {

    setCantidad(cantidad+1);

    const res = await addToCartAPI(session?.user._id, prod.productoId._id, prod.productoId.precio, 1);    
    if(res.ok) {
      dispatch(addToCartSlice({cantidad: (cantidad-prod.cantidad), game: prod.productoId}))
      dispatch(getUserCart(session?.user._id))
    }           
  }

  return (
    <div className='w-full  p-2 flex items-center justify-between gap-3'>
      <div className='flex items-center gap-3'>
        <Image 
          src={prod.productoId.boxImage} 
          alt={prod.productoId.titulo}
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
            className='text-md lg:text-lg italic'>{prod.productoId.titulo}</motion.p>
          <p className='text-blue-500 border-b-2 w-fit text-[14px] hover:cursor-pointer'>Eliminar</p>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row items-center gap-4 lg:gap-8'>
        <div className='flex justify-center items-center border rounded-md overflow-hidden'>
          <button className='w-6 h-6 md:w-9 md:h-9 bg-black text-white text-xl'>-</button>
          <p className='w-6 h-6 md:w-9 md:h-9 flex items-center justify-center select-none text-lg'>{cantidad}</p>
          <button 
            onClick={increment}
            className='w-6 h-6 md:w-9 md:h-9 bg-black text-white text-lg'>+</button>
        </div>
        <p className='text-xl font-bold'>${separadorMiles(prod.productoId.precio*prod.cantidad)}</p>
      </div>

      {/* <CartControls prodId={prod._id} precio={prod.precio} cantidad={cantidad}/> */}
    </div>
  )
}

export default CarritoCard