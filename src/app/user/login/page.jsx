import { LoginForm } from '@/components/LoginForm'
import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (    
    <div className='font-montserrat contenedor my-4 flex items-center justify-center w-full h-full min-h-[calc(100vh-140px)]'>
      <div className='flex flex-col gap-3 items-center justify-center w-full h-full'>
        <h1 className='font-semibold text-center border-b-2 border-black w-full text-3xl -mt-24'>Iniciar Sesión</h1>

        <LoginForm />
      </div>
    </div>
  )
}

export default Login