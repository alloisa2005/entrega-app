'use client'

import { separadorMiles } from '@/utils/separadorMiles'
import React from 'react'

const CartControls = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center gap-4 lg:gap-16'>
      <div className='flex justify-center items-center border rounded-md overflow-hidden'>
        <button className='w-6 h-6 md:w-9 md:h-9 bg-black text-white text-xl'>-</button>
        <p className='w-6 h-6 md:w-9 md:h-9 flex items-center justify-center select-none text-lg'>1</p>
        <button className='w-6 h-6 md:w-9 md:h-9 bg-black text-white text-lg'>+</button>
      </div>
      <p className='text-xl font-bold'>${separadorMiles(1400)}</p>
    </div>
  )
}

export default CartControls