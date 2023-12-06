import { getUsersMasCompras } from '@/utils/estadisticas/estadisticas';
import { separadorMiles } from '@/utils/separadorMiles';
import React from 'react'

const UsersMasCompras = async () => {

  const users = await getUsersMasCompras();      

  return (
    <div className=' col-span-3 p-2 border-2 shadow-md rounded-md font-montserrat font-semibold '>
      <div className='grid grid-cols-8 gap-2 border-b-2 mb-6'>
        <p className='col-span-4 text-sm'>Mejores Clientes</p>                
        <p className='col-span-2 text-[13px]'>Cant. Compras</p>
        <p className='col-span-2 text-[13px]'>Monto Total ($)</p>        
      </div>


      {
        users.map((user) => (
          <div key={user._id} className='grid grid-cols-8 gap-2 text-gray-500 border-b-2 py-1'>
            <p className='col-span-4'>{user.nombre}</p>            
            <p className='col-span-2 text-center'>{user.totalCompras}</p>
            <p className='col-span-2 text-[13px] font-bold text-center'>{separadorMiles(user.montoTotal)}</p>            
          </div>
        ))
      }
    </div>
  )
}

export default UsersMasCompras 