'use client'

import { addToCart } from '@/redux/slices/cartSlice'
import { separadorMiles } from '@/utils/separadorMiles'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useSession } from 'next-auth/react'

const CartControls = ({ prodId, cantidad, precio }) => {
  const { data: session } = useSession();  
  const dispatch = useDispatch();

  const incrementCart = () => {
    dispatch(addToCart({
      usuarioId: session?.user._id,
      productoId: prodId,
      precio: precio,
      cantidad: 1,
    }))
  }

  return (
    <div className='flex flex-col lg:flex-row items-center gap-4 lg:gap-8'>
      <div className='flex justify-center items-center border rounded-md overflow-hidden'>
        <button className='w-6 h-6 md:w-9 md:h-9 bg-black text-white text-xl'>-</button>
        <p className='w-6 h-6 md:w-9 md:h-9 flex items-center justify-center select-none text-lg'>{cantidad}</p>
        <button onClick={incrementCart} className='w-6 h-6 md:w-9 md:h-9 bg-black text-white text-lg'>+</button>
      </div>
      <p className='text-xl font-bold'>${separadorMiles(precio*cantidad)}</p>
    </div>
  )
}

export default CartControls