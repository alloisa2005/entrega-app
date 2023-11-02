import Image from 'next/image'
import React from 'react'
import Menu from './Menu'

const Navbar = () => {
  return (
    <header className='w-full bg-slate-700 h-[70px]'>
      <div className='contenedor h-full flex justify-between items-center'>

        {/* Logo */}      
        <div className='flex items-center gap-1 text-white'>
          <Image src={'/images/logo.png'} alt='Logo' width={65} height={30} />
          <p className='hidden md:block text-lg'>Meeple<span className='text-rojo font-bold text-xl'>Nation</span></p>
        </div>

        {/* Opciones */}
        <Menu />
      </div>
    </header>
  )
}

export default Navbar