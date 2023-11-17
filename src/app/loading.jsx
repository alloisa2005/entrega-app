import Image from 'next/image'
import React from 'react'

const Loading = () => {
  return (
    <div className='w-full alturaMinima flex justify-center items-center'>
      <Image 
        src={'/images/logo2.png'}
        alt='logo GamedWorld'
        width={180}
        height={180}
        className='animate-pulse'
      />
    </div>
  )
}

export default Loading