
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import DatosForm from '@/components/DatosForm';
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation';
import React from 'react'

const MisDatos = async () => {  

  const session = await getServerSession(authOptions);
  if(!session) {
    redirect('/tienda/categorias/all')
  }

  return (
    <div className='contenedor my-4 alturaMinima'>
      <p className='border-b-2 border-black text-2xl italic mb-3'>Mis Datos</p>  
       
      <DatosForm />   
    </div>
  )
}

export default MisDatos