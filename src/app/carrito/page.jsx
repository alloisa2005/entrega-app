import CarritoCard from '@/components/CarritoCard'
import MetodosPago from '@/components/MetodosPago'
import React from 'react'

const Carrito = () => {
  return (
    <div className='contenedor my-4'>
      <p className='border-b-2 border-black text-2xl italic'>Mi Carrito</p>

      <div className='mt-3 flex justify-between gap-3'>
        {/* Lista de Prods */}
        <div className='flex flex-col gap-3 w-full border p-2'>
          <CarritoCard />

          <CarritoCard />
          
        </div>

        {/* Detalle de compra */}
        <div className='bg-red-200 w-[30%] p-2'>
          <p className='text-center'>Detalle de Compra</p>

          <MetodosPago />
        </div>
      </div>
    </div>
  )
}

export default Carrito