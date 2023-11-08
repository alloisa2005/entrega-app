'use client'

import Link from 'next/link'
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { navbarLinks } from '@/utils/navbarLinks'

const MenuList = ({ open, handleMenu }) => {
  return (
    <div onClick={handleMenu} className={`${open ? 'opacity-100 visible' : 'invisible opacity-0'} z-20 transition-all fixed inset-0 bg-black/50 flex justify-end`}>
      <aside className={`${open ? '' : 'translate-x-48'} transition-all w-48 bg-gray-500`}>

        <div className='flex justify-end text-white text-2xl p-5 hover:cursor-pointer' onClick={handleMenu}>
          <AiOutlineClose size={30} className='text-white hover:text-red-400' />
        </div>

        <nav className='flex flex-col gap-5 px-3 text-white font-bold'>
          {
            navbarLinks.map(( link ) => (
              <Link key={link.id} onClick={handleMenu} className='hover:text-black hover:bg-white p-2' href={link.path}>{link.title}</Link>
            ))
          }          
        </nav>
      </aside>
    </div>
  )
}

export default MenuList