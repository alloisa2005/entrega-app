import FavoritosList from '@/components/FavoritosList'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route'

const FavoritosPage = async () => {

  const session = await getServerSession(authOptions)  

  if(!session) {
    redirect('/tienda/categorias/all')
  }  

  return (
    <div className='contenedor my-4 alturaMinima'>
      <p className='border-b-2 border-black text-2xl italic mb-3'>Mis Favoritos</p> 
      
      <FavoritosList />
      
    </div>
  )
}

export default FavoritosPage