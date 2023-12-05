import { getUsersMasCompras } from '@/utils/estadisticas/estadisticas';
import React from 'react'

const UsersMasCompras = async () => {

  const users = await getUsersMasCompras();  

  return (
    <div className=' col-span-3 p-2 border-2 shadow-md rounded-md font-montserrat font-semibold '>
      <h1>Mejores clientes</h1>
    </div>
  )
}

export default UsersMasCompras