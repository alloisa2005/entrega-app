'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'

const AdminMenuList = () => {

  const pathname = usePathname();

  return (
    <div className='px-3 my-4 flex flex-col md:flex-row md:items-center justify-around bg-black text-white font-bold text-lg py-3 rounded-md'>
      <Link href={'/admin/productos'} className={pathname === '/admin/productos' ? 'w-fit border-b-2 border-red-500 text-xl mb-1 md:mb-0' : 'mb-1 md:mb-0'}>Lista Juegos</Link>
      <Link href={'/admin/nuevoJuego'} className={pathname === '/admin/nuevoJuego' ? 'w-fit border-b-2 border-red-500 text-xl mb-1 md:mb-0' : 'mb-1 md:mb-0'}>Agregar Juego</Link>
      <Link href={'/admin/usuarios'} className={pathname === '/admin/usuarios' ? 'w-fit border-b-2 border-red-500 text-xl mb-1 md:mb-0' : 'mb-1 md:mb-0'}>Lista Usuarios</Link>
      <Link href={'/admin/mensajes'} className={pathname === '/admin/mensajes' ? 'w-fit border-b-2 border-red-500 text-xl mb-1 md:mb-0' : 'mb-1 md:mb-0'}>Mensajes</Link>      
      <Link href={'/admin/estadisticas'} className={pathname === '/admin/estadisticas' ? 'w-fit border-b-2 border-red-500 text-xl mb-1 md:mb-0' : 'mb-1 md:mb-0'}>Estadísticas</Link>      
    </div>
  )
}

export default AdminMenuList