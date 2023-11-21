'use client'

import React from 'react'
import { useState } from 'react'

const MensajeForm = () => {

  const [email, setEmail] = useState('')
  const [nombre, setNombre] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();    
  }

  return (
    <form onSubmit={handleSubmit} className='mt-5 flex flex-col'>

      <div className='flex flex-col lg:flex-row items-center w-full gap-4 lg:gap-6'>

        <div className="flex flex-col w-full">
          <label>Email</label>
          <input       
            value={email}
            onChange={(e) => setEmail(e.target.value)}             
            type="text"
            className="border rounded-md p-2 outline-none focus:border-black focus:shadow-md"
            placeholder="john@gmail.com"
          />
        </div>

        <div className="flex flex-col w-full">
          <label>Nombre</label>
          <input          
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}          
            type="text"
            className="border rounded-md p-2 outline-none focus:border-black focus:shadow-md"
            placeholder="John Doe"
          />
        </div>

      </div>

      <div className="flex flex-col w-full mt-3">
        <label className="select-none font-josefin text-lg text-gray-700 italic">Mensaje</label>
        <textarea                
          name='mensaje'      
          type="text"
          placeholder="Tú mensaje..."
          className="resize-none h-[140px] outline-none font-josefin text-md border-2 px-2 py-1 rounded-md"
        />
      </div>

      <div className='w-full text-center'>
        <button className="mt-5 w-full md:w-fit md:px-8 bg-black py-2 text-white text-md font-bold rounded-md shadow-md hover:shadow-lg hover:scale-105 ease-in duration-300">
          Pregúntanos
        </button>
      </div>
    </form>
  )
}

export default MensajeForm