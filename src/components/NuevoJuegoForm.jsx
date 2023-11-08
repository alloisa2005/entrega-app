'use client'

import { useForm } from 'react-hook-form'

const NuevoJuegoForm = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>      

      <div className='flex flex-col md:flex-row items-center justify-between gap-5'>
        <div className='flex flex-col w-full'>
          <label className='font-bold'>Título</label>
          <input type="text" {...register('titulo', { required: true, maxLength: 25 })}   placeholder='Titulo de Juego' 
          className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
          />
          {errors.titulo?.type === 'required' && <span className='text-[13px] text-red-500 font-bold'>Este campo es requerido</span>}
          {errors.titulo?.type === 'maxLength' && <span className='text-[13px] text-red-500 font-bold'>El título no puede tener más de 25 caracteres</span>}
        </div>

        <div className='flex flex-col w-full md:w-[28%]'>
          <label className='font-bold'>Plataforma</label>
          <select {...register('plataforma', { required: true })} className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'>
            <option value="">Seleccione Plataforma</option>
            <option value="ps4">PS4</option>
            <option value="ps5">PS5</option>
            <option value="xbox">Xbox</option>
          </select>   
          { errors.plataforma?.type === 'required' && <span className='text-[13px] text-red-500 font-bold'>Seleccione Plataforma</span> }               
        </div>

        <div className='flex flex-col w-full md:w-[28%]'>
          <label className='font-bold'>Precio ($)</label>
          <input type="number" {...register('precio', { required: true, min: 100 })}   placeholder='Precio del Juego'
          className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
          />
          {errors.precio?.type === 'required' && <span className='text-[13px] text-red-500 font-bold'>Este campo es requerido</span>}
          {errors.precio?.type === 'min' && <span className='text-[13px] text-red-500 font-bold'>El precio no puede ser menor que $100</span>}
        </div>
      </div>

      <button type='submit'>Guardar</button>
    </form>
  )
}

export default NuevoJuegoForm