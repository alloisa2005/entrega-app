import AdminMenuList from '@/components/AdminMenuList'
import React from 'react'

const AdminLayout = ({children}) => {
  return (
    <div className='contenedor mt-3'>
      
      <AdminMenuList />

      {children}
    </div>
  )
}

export default AdminLayout