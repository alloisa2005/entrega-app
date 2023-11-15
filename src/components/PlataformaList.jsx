'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const PlataformaList = () => {

  const pathname = usePathname()  
  
  return (
    <div className='grid grid-cols-2 md:grid-cols-1 gap-2 uppercase'>
      <Link href={'/tienda/categorias/all'} className={`${pathname === '/tienda/categorias/all' ? 'font-bold text-black': 'text-gray-500'}  italic hover:text-black hover:font-semibold hover:cursor-pointer ease-in duration-200`}>All</Link>
      <Link href={'/tienda/categorias/NS'} className={`${pathname === '/tienda/categorias/NS' ? 'font-bold text-black': 'text-gray-500'}  italic hover:text-black hover:font-semibold hover:cursor-pointer ease-in duration-200`}>Nintendo Switch</Link>
      <Link href={'/tienda/categorias/PC'} className={`${pathname === '/tienda/categorias/PC' ? 'font-bold text-black': 'text-gray-500'}  italic hover:text-black hover:font-semibold hover:cursor-pointer ease-in duration-200`}>PC</Link>
      <Link href={'/tienda/categorias/PS4'} className={`${pathname === '/tienda/categorias/PS4' ? 'font-bold text-black': 'text-gray-500'}  italic hover:text-black hover:font-semibold hover:cursor-pointer ease-in duration-200`}>PS4</Link>
      <Link href={'/tienda/categorias/PS5'} className={`${pathname === '/tienda/categorias/PS5' ? 'font-bold text-black': 'text-gray-500'}  italic hover:text-black hover:font-semibold hover:cursor-pointer ease-in duration-200`}>PS5</Link>
      <Link href={'/tienda/categorias/XBOX'} className={`${pathname === '/tienda/categorias/XBOX' ? 'font-bold text-black': 'text-gray-500'}  italic hover:text-black hover:font-semibold hover:cursor-pointer ease-in duration-200`}>XBOX</Link>            
    </div>
  )
}

export default PlataformaList