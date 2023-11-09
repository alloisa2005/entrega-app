import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[420px] relative'>
      <Image src={'/images/bg.jpg'} alt='Hero Image' width={1200} height={500} priority className='w-full h-full object-cover' />
      <div className='absolute left-0 top-0 w-full h-full bg-gradient-to-b from-black to-transparent flex items-center px-20'>
        <h1 className='text-white text-right text-3xl lg:text-5xl italic w-full'>Welcome to <span className='text-5xl font-bold lg:text-6xl text-white'>GamesWorld</span></h1>
      </div>      
    </div>
  )
}

export default Hero