
import React from 'react'
import TablaProductos from '@/components/TablaProductos';
import { getProductos } from '@/utils/juegos/juegos';
import Link from 'next/link';

const ListaProductos = async () => {

  const juegos = await getProductos();  

  return (
    <div className='my-4 mb-10 font-montserrat'>      
      {
        juegos && juegos.length === 0 ? (
          <div className='text-center my-16'>
            <h2 className='font-bold text-2xl mb-6'>No tiene juegos dados de alta.</h2>
            <Link href={'/admin/nuevoJuego'} className='bg-black text-white px-4 py-3 font-bold rounded-md' >Agregar Juego</Link>
          </div>
        ) : <TablaProductos data={juegos} /> 
      }      
    </div>
  )
}

export default ListaProductos

