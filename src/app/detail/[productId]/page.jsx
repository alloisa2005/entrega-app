import { mockGames } from '@/data/products';
import Image from 'next/image';
import React from 'react'

const ProductDetail = ({ params }) => {

  const { productId } = params;
  const game = mockGames.find(g => g.id === parseInt(productId));  

  return (
    <div className='w-full h-[400px]'>
      <Image src={game.bgImage} alt={game.name} width={1000} height={800} quality="100" priority className='w-full h-full object-cover'/>
    </div>
  )
}

export default ProductDetail