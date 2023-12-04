'use client'

import { convertirfecha } from '@/utils/convertirFecha'
import { separadorMiles } from '@/utils/separadorMiles'
import React from 'react'
import { useSelector } from 'react-redux'

const ComprasList = () => {

  const { compras, comprasTotalAmount } = useSelector(state => state.compras)
  console.log(compras[0])  

  return (
    <>      
      {
        compras?.map((compra) => {
          return (
            <div key={compra._id} className='border border-black p-2 mb-4 rounded-md shadow-sm font-montserrat'>   
              <div className='flex items-center gap-6'>
              <p className='font-bold'>{convertirfecha(compra.createdAt)}</p>
              <p className='font-semibold text-gray-500 italic'>Monto ($): {separadorMiles(compra.montoTotal)}</p>
              </div>
            </div>
          )
        })
      }
    </>
  )
}

export default ComprasList