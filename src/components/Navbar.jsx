import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Menu from './Menu'

const Navbar = () => {
  return (
    <header className='w-full bg-black h-[70px]'>
      <div className='contenedor h-full flex justify-between items-center'>

        {/* Logo */}      
        <Link href={'/'} className='flex items-center gap-1 text-white'>
          <Image src={'/images/logo2.png'} alt='Logo' width={90} height={30} />
          <p className='hidden md:block text-lg'>Games<span className='text-rojo font-bold text-xl'>World</span></p>
        </Link>

        {/* Opciones */}
        <Menu />
      </div>
    </header>
  )
}

export default Navbar