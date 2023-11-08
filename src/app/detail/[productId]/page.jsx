import AddToCart from '@/components/AddToCart';
import PlataformaIcon from '@/components/PlataformaIcon';
import Trailers from '@/components/Trailers';
import { mockGames } from '@/data/products';
import Image from 'next/image';
import React from 'react'


const ProductDetail = ({ params }) => {

  const { productId } = params;
  const game = mockGames.find(g => g.id === parseInt(productId));  

  return (
    <section>
      <div className='w-full h-[400px] relative'>
        <Image src={game.bgImage} alt={game.name} width={1000} height={800} quality="100" priority className='w-full h-full object-cover'/>
        <div className='absolute w-full h-full top-0 left-0 bg-gradient-to-b from-transparent to-black'></div>
        <div className='absolute bottom-10 left-8 lg:left-20 text-white flex items-center gap-10'>
          <p className='text-3xl lg:text-4xl font-bold'>{game.name}</p>
          <PlataformaIcon plataforma={game.plataforma}/>
        </div>
      </div>

      <div className='contenedor my-5'>
        <div className='flex flex-col lg:flex-row justify-between gap-7'>
          <div className='flex-1 text-justify'>
            <p>{game.description}</p>
          </div>

          <AddToCart game={game}/>
        </div>
      </div>

      {
        game?.trailers?.length > 0 && (
          <Trailers trailers={game.trailers}/>
        )
      }
    </section>
  )
}

export default ProductDetail