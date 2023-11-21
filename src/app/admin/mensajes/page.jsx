import TablaMensajes from '@/components/TablaMensajes'
import { getAllMensajes } from '@/utils/mensajes/mensajes';
import Link from 'next/link'
import React from 'react'

const Mensajes = async () => {

  const mensajes = await getAllMensajes(); 

  return (
    <div className='my-4 mb-10 font-montserrat'>      
      {
        mensajes.length === 0 ? (
          <div className='text-center my-16'>
            <h2 className='font-bold text-2xl mb-6'>No ha recibido mensajes.</h2>
            <Link href={'/admin/nuevoJuego'} className='bg-black text-white px-4 py-3 font-bold rounded-md' >Agregar Juego</Link>
          </div>
        ) : <TablaMensajes data={mensajes} /> 
      }      
    </div>
  )
}

export default Mensajes