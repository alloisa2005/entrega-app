import CategoriesList from '@/components/CategoriesList'
import PlataformaList from '@/components/PlataformaList'
import React from 'react'

const TiendaLayout = ({ children }) => {
  return (
    <div className='contenedor'>
      <div className='w-full flex flex-col justify-between lg:flex-row mt-6 gap-3'>
        <div className='font-montserrat block w-full lg:w-[17%] p-2'>          
          <p className='font-bold text-lg mb-2'>Plataformas</p>
          <PlataformaList />
        </div>

        <div className='font-montserrat flex-1 p-2'>          
          {children}
        </div>
      </div>
    </div>
  )
}

export default TiendaLayout