'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const CategoriesList = () => {

  const pathname = usePathname()  
  
  return (
    <div className='mt-4 flex flex-wrap justify-between md:justify-center md:gap-14 lg:flex-col lg:flex-start gap-2 uppercase mb-3 text-sm md:text-md'>
      <Link href={'/tienda/categorias/all'} className={`${pathname === '/tienda/categorias/all' ? 'font-bold text-black': 'text-gray-500'}  italic hover:text-black hover:cursor-pointer`}>All</Link>
      <Link href={'/tienda/categorias/action'} className={`${pathname === '/tienda/categorias/action' ? 'font-bold text-black': 'text-gray-500'}  italic hover:text-black hover:cursor-pointer`}>Action</Link>
      <Link href={'/tienda/categorias/adventure'} className={`${pathname === '/tienda/categorias/adventure' ? 'font-bold text-black': 'text-gray-500'}  italic hover:text-black hover:cursor-pointer`}>Adventure</Link>
      <Link href={'/tienda/categorias/Platform'} className={`${pathname === '/tienda/categorias/Platform' ? 'font-bold text-black': 'text-gray-500'}  italic hover:text-black hover:cursor-pointer`}>Platform</Link>
      <Link href={'/tienda/categorias/rpg'} className={`${pathname === '/tienda/categorias/rpg' ? 'font-bold text-black': 'text-gray-500'}  italic hover:text-black hover:cursor-pointer`}>RPG</Link>
      <Link href={'/tienda/categorias/sport'} className={`${pathname === '/tienda/categorias/sport' ? 'font-bold text-black': 'text-gray-500'}  italic hover:text-black hover:cursor-pointer`}>Sport</Link>
      <hr />
    </div>
  )
}

export default CategoriesList