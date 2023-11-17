import AdminMenuList from '@/components/AdminMenuList'
import React from 'react'

export const metadata = {
  title: "Admin",
  description: "Home page",
}

const AdminLayout = ({children}) => {
  return (
    <>
      <div className='md:hidden alturaMinima w-full h-full px-4 flex flex-col justify-center items-center'>
        <h2 className='text-xl font-bold mb-8 border-b-2 border-black  text-center'>Menú Administrador</h2>
        <p className='text-lg'>Pantalla diseñada para ver en monitores grandes.</p>
        <p className='text-lg'>Por favor, acceda desde un PC.</p>
      </div>    

      <div className='hidden md:block contenedor mt-3 alturaMinima'>
        
        <AdminMenuList />

        {children}
      </div>
    </>
  )
}

export default AdminLayout