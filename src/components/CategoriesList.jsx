'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const CategoriesList = () => {

  const pathname = usePathname()  
  
  return (
    <div className='mt-4 flex flex-col gap-2 uppercase'>
      <Link href={'/tienda/all'} className={`${pathname === '/tienda/all' ? 'font-bold text-black': 'text-gray-500'}  italic hover:text-black hover:cursor-pointer`}>All</Link>
      <Link href={'/tienda/action'} className={`${pathname === '/tienda/action' ? 'font-bold text-black': 'text-gray-500'}  italic hover:text-black hover:cursor-pointer`}>Action</Link>
      <Link href={'/tienda/adventure'} className={`${pathname === '/tienda/adventure' ? 'font-bold text-black': 'text-gray-500'}  italic hover:text-black hover:cursor-pointer`}>Adventure</Link>
      <Link href={'/tienda/Platform'} className={`${pathname === '/tienda/Platform' ? 'font-bold text-black': 'text-gray-500'}  italic hover:text-black hover:cursor-pointer`}>Platform</Link>
      <Link href={'/tienda/rpg'} className={`${pathname === '/tienda/rpg' ? 'font-bold text-black': 'text-gray-500'}  italic hover:text-black hover:cursor-pointer`}>RPG</Link>
    </div>
  )
}

export default CategoriesList