import React from 'react'

const EstadisticasLayout = ({ userMasCompras, comprasMes, juegosmasvendidos }) => {  

  return (
    <div className='grid grid-cols-8 grid-rows-2 gap-3 h-[500px]'>  
      { comprasMes }  
      { userMasCompras }
      { juegosmasvendidos }
    </div>
  )
}

export default EstadisticasLayout 