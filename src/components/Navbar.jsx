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
          <p className='font-caveat hidden md:block text-3xl'>Games<span className='text-4xl text-rojo font-bold'>World</span></p>
        </Link>

        {/* Opciones */}
        <Menu />
      </div>
    </header>
  )
}

export default Navbar