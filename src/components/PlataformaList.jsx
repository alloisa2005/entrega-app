'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const PlataformaList = () => {

  const pathname = usePathname()  
  
  return (
    <div className='mt-4 flex flex-wrap justify-between md:justify-center md:gap-14 lg:flex-col lg:flex-start gap-2 uppercase mb-3 text-sm md:text-md'>
      <Link href={'/tienda/plataformas/all'} className={`${pathname === '/tienda/plataformas/all' ? 'font-bold text-black': 'text-gray-500'}  italic hover:text-black hover:cursor-pointer`}>All</Link>
      <Link href={'/tienda/plataformas/NS'} className={`${pathname === '/tienda/plataformas/NS' ? 'font-bold text-black': 'text-gray-500'}  italic hover:text-black hover:cursor-pointer`}>Nintendo Switch</Link>
      <Link href={'/tienda/plataformas/PS4'} className={`${pathname === '/tienda/plataformas/PS4' ? 'font-bold text-black': 'text-gray-500'}  italic hover:text-black hover:cursor-pointer`}>PS4</Link>
      <Link href={'/tienda/plataformas/XBOX'} className={`${pathname === '/tienda/plataformas/XBOX' ? 'font-bold text-black': 'text-gray-500'}  italic hover:text-black hover:cursor-pointer`}>XBOX</Link>      
      <hr />
    </div>
  )
}

export default PlataformaList