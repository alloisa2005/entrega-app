'use client'

import Link from 'next/link'
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const MenuList = ({ open, handleMenu }) => {
  return (
    <div className={`${open ? 'opacity-100 visible' : 'invisible opacity-0'} transition-all fixed inset-0 bg-black/50 flex justify-end`}>
      <aside className={`${open ? '' : 'translate-x-48'} transition-all w-48 bg-gray-500`}>

        <div className='flex justify-end text-white text-2xl p-5 hover:cursor-pointer' onClick={handleMenu}>
          <AiOutlineClose size={30} className='text-white hover:text-red-400' />
        </div>

        <nav className='flex flex-col gap-5 px-3 text-white font-bold'>
          <Link onClick={handleMenu} className='hover:text-red-400' href={'/'}>Inicio</Link>
          <Link onClick={handleMenu} className='hover:text-red-400' href={'/'}>Tienda</Link>
          <Link onClick={handleMenu} className='hover:text-red-400' href={'/'}>Sobre Nosotros</Link>
        </nav>
      </aside>
    </div>
  )
}

export default MenuList