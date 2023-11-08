import Image from 'next/image'
import React from 'react'

const MetodosPago = () => {
  return (
    <div className='mt-3 flex items-center justify-between px-3 gap-8'>
      <div className='w-full'>
        <Image 
          src={'/images/mercadoPago.png'}
          alt='Mercado Pago'
          width={80}
          height={50}
          className='w-full object-cover'
        />
      </div>

      <div className='w-full'>
        <Image 
          src={'/images/visa.png'}
          alt='Mercado Pago'
          width={80}
          height={50}
          className='w-full object-cover'
        />
      </div>

      <div className='w-full'>
        <Image 
          src={'/images/gPay.png'}
          alt='Mercado Pago'
          width={80}
          height={50}
          className='w-full object-cover'
        />
      </div>

    </div>
  )
}

export default MetodosPago