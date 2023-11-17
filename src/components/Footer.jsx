import { AiOutlineInstagram } from 'react-icons/ai'

const Footer = () => {

  const anio = new Date().getFullYear()

  return (
    <footer className='bg-black text-white py-2 font-montserrat'>
      <div className='contenedor h-full flex flex-col gap-2 items-center justify-between md:flex-row'>
        <p>&copy; GamesWorld {anio}</p>
        <div className='flex items-center gap-3'>
          <p>Desarrollado por <span className='text-md font-bold'>aallois</span></p>
          <div className='w-7 h-7 instagram overflow-hidden rounded-full p-1 hover:cursor-pointer hover:scale-105 ease-in duration-300'>
            <AiOutlineInstagram size={20} className='h-full w-full' />  
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer