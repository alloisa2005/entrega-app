
import React from 'react'
import { mockGames } from '../../../data/products'
import TablaProductos from '@/components/TablaProductos';

const ListaProductos = () => {


  return (
    <div className='mty-4 mb-10'>      
      <TablaProductos data={mockGames} />
    </div>
  )
}

export default ListaProductos

