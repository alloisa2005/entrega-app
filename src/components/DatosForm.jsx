'use client'

import { convertirfecha } from '@/utils/convertirFecha';
import { useSession } from 'next-auth/react'
import Image from 'next/image';
import React, { useState } from 'react'
import { FaRegEdit } from "react-icons/fa";


const DatosForm = () => {

  const { data: session } = useSession();
  const [newDireccion, setNewDireccion] = useState(session.user.direccion);

  return (
    <div className=' mt-4 font-montserrat'>
      <div className='flex items-center gap-10'>
        <Image 
          src={session.user.image}
          alt={session.user.nombre}          
          width={100}
          height={100}
          className='rounded-full w-[140px] h-[140px] object-cover'
          />

        <div className='flex flex-col gap-1'>
          <p className='text-6xl font-semibold font-caveat'>{session.user.nombre}</p>
          <p className='text-lg text-gray-500 font-bold'>{session.user.email}</p>
          <p className='text-md text-gray-400 italic'>Creación: {convertirfecha(session.user.createdAt)}</p>          
        </div>
      </div>

      <div className="flex flex-col mt-10">
        <label className="font-bold text-md">Dirección</label>
        <div className='flex items-center justify-between gap-8'>
          <input
            value={newDireccion}   
            onChange={(e) => setNewDireccion(e.target.value)}         
            type="text"
            className="w-full border rounded-md p-2 outline-none focus:border-black focus:shadow-md"
          />
          <FaRegEdit size={30} className='text-gray-500 hover:cursor-pointer hover:text-black ease-in duration-200' />
        </div>
      </div>
    </div>
  )
}

export default DatosForm