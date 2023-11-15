'use client';

import React from 'react'
import { AiFillCloseCircle } from "react-icons/ai";

const MiModal = ({error, mensaje, closeFn}) => {
  return (
    <div className="px-4 absolute w-full h-full top-0 left-0 bottom-0 bg-black/60 z-20 flex items-center justify-center">          
      <div className="p-3 w-full md:w-[45%]  bg-white rounded-md">
        <div className="flex items-center justify-between mb-3">
          <p className={`${error ? 'text-red-500' : 'text-green-500'} text-center font-bold text-xl`}>{error ? 'ERROR' : 'EXITO'}</p>
          <AiFillCloseCircle onClick={closeFn}
            size={28} 
            className={`${error ? 'text-red-500' : 'text-green-500'} hover:scale-110 hover:cursor-pointer ease-in duration-300`} 
          />
        </div>
        <p className='font-semibold'>{mensaje}</p>
      </div>
      
    </div>
  )
}

export default MiModal