'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Menu from './Menu'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <header className='w-full bg-black h-[70px]'>
      <div className='contenedor h-full flex justify-between items-center'>

        {/* Logo */}      
        <Link href={'/'} className='flex items-center  text-white'>
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0, x: -100 }}
            >
            <Image src={'/images/logo2.png'} alt='Logo' width={90} height={30} />
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0, x: 100 }}
            className='font-caveat hidden md:block text-3xl'>Games<span className='text-4xl text-rojo font-bold'>World</span></motion.p>
        </Link>

        {/* Opciones */}
        <Menu />
      </div>
    </header>
  )
}

export default Navbar