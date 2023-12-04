import React from 'react'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '../api/auth/[...nextauth]/route'
import ComprasList from '@/components/ComprasList'

const MisCompras = async () => {
  const session = await getServerSession(authOptions)  

  if(!session) {
    redirect('/tienda/categorias/all')
  }  

  return (
    <div className='contenedor my-4 alturaMinima'>
      <p className='border-b-2 border-black text-2xl italic mb-3'>Mis Compras</p>     

      <ComprasList />           
    </div>
  )
}

export default MisCompras