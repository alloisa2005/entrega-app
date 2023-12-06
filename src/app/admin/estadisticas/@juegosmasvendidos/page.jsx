import { getJuegosMasVendidos } from '@/utils/estadisticas/estadisticas';
import React from 'react'

const JuegosMasVendidos = async () => {

  const juegos = await getJuegosMasVendidos();  

  return (
    <div className=' col-span-3 p-2 border-2 shadow-md rounded-md font-montserrat font-semibold '>
      <div className='flex items-center justify-between border-b-2 mb-6'>
        <p className=''>Juegos Más Vendidos</p>
        <p className=''>Cantidad</p>
      </div>

      {
        juegos.map((juego, index) => (
          <div key={index} className='flex justify-between border-b-2 py-1 text-gray-500'>
            <p className='italic'>{juego.titulo}</p>
            <p className='font-bold'>{juego.totalVendido}</p>
          </div>
        ))
      }
    </div>
  )
}

export default JuegosMasVendidos