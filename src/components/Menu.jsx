'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import MenuList from './MenuList'
import { navbarLinks } from '@/utils/navbarLinks'
import { usePathname } from 'next/navigation'
import { HiMenuAlt3 } from 'react-icons/hi'
import { useSelector } from 'react-redux'

const Menu = () => {  

  const { cart } = useSelector(state => state.cart)  

  const pathname = usePathname();
  const [open, setOpen] = useState(false)
  const handleMenu = () => setOpen(!open)

  return (
    <>
      <nav className='hidden lg:flex items-center gap-5 px-3 text-white font-bold'>
        {
          navbarLinks.map(( link ) => (
            <Link key={link.id} className={`${pathname === link.path ? 'bg-white text-black': ''} font-montserrat hover:text-black hover:bg-white p-2 rounded-md`} href={link.path}>
              {link.title}
            </Link>
          ))
        } 
        <p className='text-white'>{cart.cantidadProductos}</p>
      </nav>
      <div className='lg:hidden' onClick={handleMenu} >
        <HiMenuAlt3 size={32} className='text-white hover:cursor-pointer' />
      </div>   

      <MenuList open={open} handleMenu={handleMenu} /> 
    </>
  )
}

export default Menu