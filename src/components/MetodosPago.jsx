import Image from 'next/image'
import React from 'react'

const MetodosPago = () => {
  return (
    <div className='mt-3 flex items-center justify-between gap-8 px-3'>
      <div className='w-full text-center flex justify-center items-center'>
        <Image 
          src={'/images/mercadoPago.png'}
          alt='Mercado Pago'
          width={80}
          height={50}
          className='w-[100px] h-[70px] object-contain'
        />
      </div>

      <div className='w-full text-center flex justify-center items-center'>
        <Image 
          src={'/images/visa.png'}
          alt='Mercado Pago'
          width={80}
          height={50}
          className='w-[100px] h-[70px] object-contain'
        />
      </div>

      <div className='w-full text-center flex justify-center items-center'>
        <Image 
          src={'/images/gPay.png'}
          alt='Mercado Pago'
          width={80}
          height={50}
          className='w-[100px] h-[70px] object-contain'
        />
      </div>

    </div>
  )
}

export default MetodosPago