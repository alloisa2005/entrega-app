import Link from 'next/link'
import React from 'react'

const CategoriesList = () => {
  return (
    <div className='mt-4 flex flex-col gap-2 uppercase'>
      <Link href={'/tienda/all'} className='text-gray-500 italic hover:text-black hover:cursor-pointer'>All</Link>
      <Link href={'/tienda/action'} className='text-gray-500 italic hover:text-black hover:cursor-pointer'>Action</Link>
      <Link href={'/tienda/adventure'} className='text-gray-500 italic hover:text-black hover:cursor-pointer'>Adventure</Link>
      <Link href={'/tienda/Platform'} className='text-gray-500 italic hover:text-black hover:cursor-pointer'>Platform</Link>
      <Link href={'/tienda/rpg'} className='text-gray-500 italic hover:text-black hover:cursor-pointer'>RPG</Link>
    </div>
  )
}

export default CategoriesList