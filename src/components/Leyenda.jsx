import React from 'react'
import { GiPriceTag } from 'react-icons/gi'
import { AiOutlineStar } from 'react-icons/ai'
import { FaTruckFast } from 'react-icons/fa6'

const Leyenda = () => {
  return (
    <div className='relative w-full'>
      <div className="absolute top-0 left-0 w-full h-[30px] bg-gradient-to-b from-black to-transparent"></div>
      
      <div className='contenedor py-24 grid grid-cols-1 md:grid-cols-3 gap-6'>

        <div className='font-montserrat border rounded-md text-center w-full flex flex-col items-center gap-3 p-2 justify-center shadow-md'>
          <GiPriceTag size={70} className='text-black' />
          <h2 className='text-2xl font-bold text-black font-montserrat'>Grandes Ofertas</h2>
          <p>En GamesWorld te ofrecemos las mejores ofertas en juegos, precios increíbles en títulos únicos y exclusivos, con todos los métodos de pago.</p>
        </div>

        <div className='font-montserrat border rounded-md text-center w-full flex flex-col items-center gap-3 p-2 justify-center shadow-md'>
          <AiOutlineStar size={70} className='text-black' />
          <h2 className='text-2xl font-bold text-black'>Novedades Exclusivas</h2>
          <p>Solo en GamesWorld encontrarás novedades únicas y exclusivas en juegos de mesa importados de las mejores y más reconocidas editoriales.</p>
        </div>

        <div className='font-montserrat border rounded-md text-center w-full flex flex-col items-center gap-3 p-2 justify-center shadow-md'>
          <FaTruckFast size={70} className='text-black' />
          <h2 className='text-2xl font-bold text-black'>Envíos Rápidos</h2>
          <p>En GamesWorld te ofrecemos envíos rápidos y seguros, en tiempos record, a todo Uruguay y con los costos de envío mas bajo que puedas encontrar</p>
        </div>
      </div>


      <div className="absolute bottom-0 left-0 w-full h-[30px] bg-gradient-to-t from-black to-transparent"></div>
    </div>
  )
}

export default Leyenda