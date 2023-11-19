import AddToCart from '@/components/AddToCart';
import PlataformaIcon from '@/components/PlataformaIcon';
import ProductTitle from '@/components/ProductTitle';
import Trailers from '@/components/Trailers';
import { getProductoById } from '@/utils/juegos/juegos';
import Image from 'next/image';
import React from 'react'

export const generateMetadata = async ({ params }) => {   
  const game = await getProductoById(params.productId);
  if(!game) return {title: 'Not Found', description: 'Not Found'}

  return {
    title: game.titulo,
    description: `${game.titulo} - ${game.categoria}`,   
  }
}

const ProductDetail = async ({ params }) => {

  const { productId } = params;  
  const game = await getProductoById(productId);
  
  return (
    <section className='font-montserrat'>
      <div className='w-full h-[400px] relative'>
        <Image src={game.posterImage} alt={game.titulo} width={1000} height={800} quality="100" priority className='w-full h-full object-cover'/>
        <div className='absolute w-full h-full top-0 left-0 bg-gradient-to-b from-transparent to-black'></div>
        <div className='absolute bottom-10 left-8 lg:left-20 text-white flex items-center gap-10'>          
          <ProductTitle titulo={game.titulo} />
          <PlataformaIcon plataforma={game.categoria}/>
        </div>
      </div>

      <div className='contenedor my-5'>
        <div className='flex flex-col lg:flex-row justify-between gap-7'>
          <div className='flex-1 text-justify text-md'>
            <p>{game.descripcion}</p>
          </div>

          <AddToCart game={game}/>
        </div>
      </div>

      <Trailers trailer1={game.trailer1} trailer2={game.trailer2} trailer3={game.trailer3}/>
    </section>
  )
}

export default ProductDetail