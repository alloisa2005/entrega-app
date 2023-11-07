'use client'

import React, { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import MenuList from './MenuList'

const Menu = () => {

  const [open, setOpen] = useState(false)

  const handleMenu = () => setOpen(!open)

  return (
    <>
      <div className='' onClick={handleMenu} >
        <HiMenuAlt3 size={32} className='text-white hover:cursor-pointer' />
      </div>   

      <MenuList open={open} handleMenu={handleMenu} /> 
    </>
  )
}

export default Menu