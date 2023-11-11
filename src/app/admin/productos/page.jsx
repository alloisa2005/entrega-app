import MiTabla from '@/components/MiTabla'
import React from 'react'
import { mockGames } from '../../../data/products'

const ListaProductos = () => {
  return (
    <div className='mty-4 mb-10'>      
      <MiTabla data={mockGames} />
    </div>
  )
}

export default ListaProductos

