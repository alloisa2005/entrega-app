'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const CategoriesList = () => {

  const pathname = usePathname()  
  
  return (
    <div className='mt-4 flex flex-col gap-2 uppercase mb-3'>
      <Link href={'/tienda/categorias/all'} className={`${pathname === '/tienda/categorias/all' ? 'font-bold text-black': 'text-gray-500'}  italic hover:text-black hover:cursor-pointer`}>All</Link>
      <Link href={'/tienda/categorias/action'} className={`${pathname === '/tienda/categorias/action' ? 'font-bold text-black': 'text-gray-500'}  italic hover:text-black hover:cursor-pointer`}>Action</Link>
      <Link href={'/tienda/categorias/adventure'} className={`${pathname === '/tienda/categorias/adventure' ? 'font-bold text-black': 'text-gray-500'}  italic hover:text-black hover:cursor-pointer`}>Adventure</Link>
      <Link href={'/tienda/categorias/Platform'} className={`${pathname === '/tienda/categorias/Platform' ? 'font-bold text-black': 'text-gray-500'}  italic hover:text-black hover:cursor-pointer`}>Platform</Link>
      <Link href={'/tienda/categorias/rpg'} className={`${pathname === '/tienda/categorias/rpg' ? 'font-bold text-black': 'text-gray-500'}  italic hover:text-black hover:cursor-pointer`}>RPG</Link>
      <hr />
    </div>
  )
}

export default CategoriesList