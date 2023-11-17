'use client'

import Link from 'next/link'
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { navbarLinks } from '@/utils/navbarLinks'
import { usePathname } from 'next/navigation'

const MenuList = ({ open, handleMenu }) => {

  const pathname = usePathname();

  return (
    <div onClick={handleMenu} className={`${open ? 'opacity-100 visible' : 'invisible opacity-0'} z-20 transition-all fixed inset-0 bg-black/70 flex justify-end`}>
      <aside className={`${open ? '' : 'translate-x-[50%]'} transition-all w-[50%] bg-black/90`}>

        <div className='flex justify-end text-white text-2xl p-5 hover:cursor-pointer' onClick={handleMenu}>
          <AiOutlineClose size={30} className='text-white hover:text-black' />
        </div>

        <nav className='flex flex-col gap-5 px-3 text-white font-bold'>
          {
            navbarLinks.map(( link ) => (
              <Link key={link.id} onClick={handleMenu} className={`${pathname === link.path ? 'text-black bg-white' : ''} font-montserrat hover:text-black hover:bg-white p-2 rounded-md`} href={link.path}>{link.title}</Link>
            ))
          }          
        </nav>
      </aside>
    </div>
  )
}

export default MenuList