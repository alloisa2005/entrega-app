import React from 'react'
import MensajeForm from './MensajeForm'

const MensajeContacto = () => {
  return (
    <div className='font-montserrat contenedor text-black py-8'>
      <h2 className='font-semibold italic text-md md:text-xl lg:text-2xl uppercase border-b-2 border-black'>
        Comentarios o Sugerencias
      </h2>      

      <MensajeForm />
    </div>
  )
}

export default MensajeContacto