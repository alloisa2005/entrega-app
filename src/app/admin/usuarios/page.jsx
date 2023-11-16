import TablaUsuarios from '@/components/TablaUsuarios'
import { getUsers } from '@/utils/usuarios/usuarios'
import React from 'react'

const ListaUsuarios = async () => {

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