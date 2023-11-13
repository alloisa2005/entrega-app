import EditJuegoForm from '@/components/EditJuegoForm'
import { mockGames } from '@/data/products';
import React from 'react'

const EditJuego = ({ params }) => {

  const {juegoId} = params;
  const game = mockGames.find(g => g.id === parseInt(juegoId)); 

  return (
    <div className='w-full'>      
      <EditJuegoForm game={game} />
    </div>
  )
}

export default EditJuego