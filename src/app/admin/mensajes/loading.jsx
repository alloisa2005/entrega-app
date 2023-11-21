import Spinner from '@/components/Spinner'
import React from 'react'

const loading = () => {
  return (
    <div className='w-full h-[150px] flex flex-col items-center justify-center'>
      <Spinner />
      <p className='mt-3 font-bold text-lg'>Cargando Mensajes</p>
    </div>
  )
}

export default loading