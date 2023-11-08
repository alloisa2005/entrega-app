import CategoriesList from '@/components/CategoriesList'
import PlataformaList from '@/components/PlataformaList'
import React from 'react'

const TiendaLayout = ({ children }) => {
  return (
    <div className='contenedor'>
      <div className='w-full flex justify-between mt-6 gap-3'>
        <div className='hidden lg:block w-[17%] border p-2 shadow-md'>
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