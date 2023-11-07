import React from 'react'

const TiendaLayout = ({ children }) => {
  return (
    <div className='contenedor'>
      <div className='w-full flex justify-between mt-6 gap-3'>
        <div className='w-[17%] border p-2'>
          Categorías
        </div>

        <div className='flex-1 bg-red-400 p-2'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default TiendaLayout