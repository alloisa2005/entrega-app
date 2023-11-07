'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'

const AdminMenuList = () => {

  const pathname = usePathname();

  return (
    <div className='my-4 flex items-center justify-around bg-black text-white font-bold text-lg py-3 rounded-md'>
      <Link href={'/admin/productos'} className={pathname === '/admin/productos' ? 'border-b-2 border-red-500 text-xl' : ''}>Lista Productos</Link>
      <Link href={'/admin/usuarios'} className={pathname === '/admin/usuarios' ? 'border-b-2 border-red-500 text-xl' : ''}>Lista Usuarios</Link>
      <Link href={'/admin/compras'} className={pathname === '/admin/compras' ? 'border-b-2 border-red-500 text-xl' : ''}>Compras</Link>
      <Link href={'/admin/estadisticas'} className={pathname === '/admin/estadisticas' ? 'border-b-2 border-red-500 text-xl' : ''}>Estadísticas</Link>
    </div>
  )
}

export default AdminMenuList