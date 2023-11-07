import React from 'react'
import { BsNintendoSwitch, BsPlaystation, BsXbox } from 'react-icons/bs';

const PlataformaIcon = ({ plataforma }) => {
  return (
    <div className='text-gray-400 text-4xl'>
      {plataforma === 'NS' && <BsNintendoSwitch size={40} className='text-4xl'/>}    
      {plataforma === 'PS4' && <BsPlaystation size={40} className='text-4xl'/>}
      {plataforma === 'XBOX' && <BsXbox size={40} className='text-4xl'/>}      
    </div>
  )
}

export default PlataformaIcon