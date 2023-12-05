import React from 'react'

const EstadisticasLayout = ({ prueba, nose, jua }) => {
  return (
    <div className='grid grid-cols-7 gap-3  h-[350px]'>            
      { prueba }
      { nose }
      { jua }  
    </div>
  )
}

export default EstadisticasLayout 