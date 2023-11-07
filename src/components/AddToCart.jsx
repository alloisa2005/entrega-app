import React from 'react'
import { BsCartPlusFill } from 'react-icons/bs';

const AddToCart = ({ game }) => {
  return (
    <div className='w-full lg:w-[30%] border rounded-md shadow-md flex-col items-center justify-center overflow-hidden'>
      <p className='select-none text-center mb-2 text-black border-b-2 text-xl py-3'>Precio</p>
      
      <div className='select-none'>
        <p className='text-2xl font-bold mt-5 text-center'>${game.price}</p>
      </div>

      <div className='select-none flex items-center justify-center mt-5 gap-7'>
        <div className='h-9 w-9 flex items-center justify-center rounded-full bg-black text-white shadow-sm hover:scale-105 hover:shadow-lg hover:cursor-pointer ease-out duration-300 '>
          <p className='font-bold text-lg'>-</p>
        </div>
        <p className='text-3xl font-bold text-red-500'>1</p>
        <div className='h-9 w-9 flex items-center justify-center rounded-full bg-black text-white shadow-sm hover:scale-105 hover:shadow-lg hover:cursor-pointer ease-out duration-300 '>
          <p className='font-bold text-lg'>+</p>
        </div>
      </div> 

      <div className='select-none flex items-center justify-center gap-4 bg-black py-3 text-white mt-4 hover:bg-black/80 hover:cursor-pointer ease-out duration-300'>
        <BsCartPlusFill size={20} className='text-white' />
        <p>Añadir al carrito</p>
      </div>           
    </div>
  )
}

export default AddToCart