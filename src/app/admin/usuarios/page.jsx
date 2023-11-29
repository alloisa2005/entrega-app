import TablaUsuarios from '@/components/TablaUsuarios'
import { getUsers } from '@/utils/usuarios/usuarios'
import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

const ListaUsuarios = async () => {

  const session = await getServerSession(authOptions)  

  if(!session) {
    redirect('/')
  }

  const data = await getUsers();    
  
  return (
    <div className='my-4 mb-10'>      
      {
        data.length === 0 ? (
          <div className='text-center my-16 font-bold text-2xl'>
            <h2>No hay usuarios registrados.</h2>
          </div>
        ) : <TablaUsuarios data={data} /> 
      }      
    </div>
  )
}

export default ListaUsuarios