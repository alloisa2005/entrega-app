import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (    
    <div className='contenedor my-4 flex items-center justify-center w-full h-full min-h-[calc(100vh-140px)]'>
      <div className='flex flex-col gap-3 items-center justify-center w-full h-full'>
        <h1 className='text-center border-b-2 border-black w-full text-3xl -mt-24'>Iniciar Sesión</h1>

        <form className='mt-4 md:mt-8 mb-6 w-full lg:max-w-[50%] flex flex-col justify-center gap-6 border-2 p-4 rounded-md shadow-md'>
          <div className='flex flex-col'>
            <label>Email</label>
            <input type='text' className='border rounded-md p-2 outline-none focus:border-black focus:shadow-md' placeholder='john@gmail.com' />
          </div>

          <div className='flex flex-col mt-3'>
            <label>Contraseña</label>
            <input type='password' className='border rounded-md p-2 outline-none focus:border-black focus:shadow-md' />
          </div>

          <button className='bg-black py-2 text-white text-lg font-bold rounded-md shadow-md'>Iniciar Sesión</button>

          <div className='flex justify-end items-center gap-3'>
            <span className='font-semibold'>¿No tienes cuenta?</span>
            <Link href='/user/register' className='text-blue-500 hover:underline'>Regístrate</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login