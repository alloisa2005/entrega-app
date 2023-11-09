'use client'

import { navbarLinks } from '@/utils/navbarLinks'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import MenuList from './MenuList'

const Menu = () => {

  const pathname = usePathname();
  const [open, setOpen] = useState(false)
  const handleMenu = () => setOpen(!open)

  return (
    <>
      <nav className='hidden lg:flex items-center gap-5 px-3 text-white font-bold'>
        {
          navbarLinks.map(( link ) => (
            <Link key={link.id} className={`${pathname === link.path ? 'bg-white text-black': ''} hover:text-black hover:bg-white p-2 rounded-md`} href={link.path}>{link.title}</Link>
          ))
        } 
      </nav>
      <div className='lg:hidden' onClick={handleMenu} >
        <HiMenuAlt3 size={32} className='text-white hover:cursor-pointer' />
      </div>   

      <MenuList open={open} handleMenu={handleMenu} /> 
    </>
  )
}

export default Menu