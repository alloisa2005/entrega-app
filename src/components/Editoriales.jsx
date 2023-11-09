import { editoriales } from '@/utils/editoriales'
import Image from 'next/image'
import React from 'react'

const Editoriales = () => {
  return (
    <div className='bg-black'>
      <div className='contenedor text-white py-6'>
        <p className='text-center text-xl lg:text-3xl'>Nuestras Principales Editoriales </p>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-12 my-14'>
        {
          editoriales.map((editorial) => (
            <div key={editorial.id} className=''>
              <Image 
                src={editorial.img}
                alt={editorial.id}
                width={200}
                height={200}                
              />
            </div>
          ))
        }
        </div>

      </div>
    </div>
  )
}

export default Editoriales