import CategoriesList from '@/components/CategoriesList'
import PlataformaList from '@/components/PlataformaList'
import React from 'react'

const TiendaLayout = ({ children }) => {
  return (
    <div className='contenedor'>
      <div className='w-full flex flex-col justify-between lg:flex-row mt-6 gap-3'>
        <div className='block w-full lg:w-[17%] border p-2 shadow-md'>
          <p className='font-bold mb-2'>Categorías</p>
          <CategoriesList />

          <p className='font-bold mb-2'>Plataformas</p>
          <PlataformaList />
        </div>

        <div className='flex-1 p-2'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default TiendaLayout