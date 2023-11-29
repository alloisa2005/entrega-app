
import React from 'react'
import { getProductosOrdenados } from '@/utils/juegos/juegos'
import FilaJuegosLatest from './FilaJuegosLatest';
import FilaJuegosPopulares from './FilaJuegosPopulares';


const FilaJuegos = async () => {

  const gamesLatest = await getProductosOrdenados('latest')    
  const gamesRatings = await getProductosOrdenados('rating')    

  return (
    <div className='bg-black'>      

      <FilaJuegosLatest gamesLatest={gamesLatest} />        
      <FilaJuegosPopulares gamesRatings={gamesRatings} />      

    </div>
  )
}

export default FilaJuegos