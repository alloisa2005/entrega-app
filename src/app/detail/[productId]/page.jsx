import PlataformaIcon from '@/components/PlataformaIcon';
import { mockGames } from '@/data/products';
import Image from 'next/image';
import React from 'react'

const ProductDetail = ({ params }) => {

  const { productId } = params;
  const game = mockGames.find(g => g.id === parseInt(productId));  

  return (
    <div className='w-full h-[400px] relative'>
      <Image src={game.bgImage} alt={game.name} width={1000} height={800} quality="100" priority className='w-full h-full object-cover'/>
      <div className='absolute w-full h-full top-0 left-0 bg-gradient-to-b from-transparent to-black'></div>
      <div className='absolute bottom-10 left-20 text-white flex items-center gap-10'>
        <p className=' text-4xl font-bold'>{game.name}</p>
        <PlataformaIcon plataforma={game.plataforma}/>
      </div>
    </div>
  )
}

export default ProductDetail