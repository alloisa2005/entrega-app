import React from 'react'

const Footer = () => {

  const anio = new Date().getFullYear()

  return (
    <footer className='bg-black text-white py-2'>
      <div className='contenedor h-full flex flex-col gap-2 items-center justify-between md:flex-row'>
        <p>&copy; GamesWorld {anio}</p>
        <p>Desarrollado por <span className='text-md font-bold'>aallois</span></p>
      </div>
    </footer>
  )
}

export default Footer