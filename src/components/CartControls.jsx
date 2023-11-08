'use client'

import React from 'react'

const CartControls = () => {
  return (
    <div className='flex items-center gap-16'>
      <div className='flex justify-center items-center border rounded-md overflow-hidden'>
        <button className='w-9 h-9 bg-black text-white text-xl'>-</button>
        <p className='w-9 h-9 flex items-center justify-center select-none text-lg'>1</p>
        <button className='w-9 h-9 bg-black text-white text-xl'>+</button>
      </div>
      <p className='text-xl font-bold'>$280</p>
    </div>
  )
}

export default CartControls