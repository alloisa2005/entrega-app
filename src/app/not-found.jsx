import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='contenedor h-screen flex flex-col items-center justify-center mt-20'>
      <Image 
        src={'/images/404.png'}
        alt='404 Not Found'
        width={500} 
        height={500} />
      
      <p className='text-3xl font-bold italic text-primario'>La página que intenta acceder no existe</p>
      <Link href={'/tienda/categorias/all'} className='mt-8 bg-primario px-4 py-3 text-white rounded-lg text-lg hover:bg-primario/90 hover:shadow-md ease-out duration-300'>
        Volver a la tienda
      </Link>
    </div>
  )
}

export default NotFound