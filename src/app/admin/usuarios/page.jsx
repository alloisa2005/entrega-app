import TablaUsuarios from '@/components/TablaUsuarios'
import { getUsers } from '@/utils/usuarios/usuarios'
import React from 'react'

const ListaUsuarios = async () => {

  const data = await getUsers();
  // console.log(data)

  return (
    <div className='mty-4 mb-10'>      
      <TablaUsuarios data={data} />
    </div>
  )
}

export default ListaUsuarios