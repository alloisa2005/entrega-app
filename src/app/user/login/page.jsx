
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { LoginForm } from '@/components/LoginForm'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

export const metadata = {
  title: "Login",
  description: "Home page",
}

const Login = async () => {

  const session = await getServerSession(authOptions)

  if (session) {
    redirect('/tienda/categorias/all')
  }

  return (    
    <div className='font-montserrat contenedor my-4 flex items-center justify-center w-full min-h-[calc(100vh-140px)]'>
      <div className='flex flex-col gap-3 items-center justify-center w-full h-full'>
        <h1 className='font-semibold text-center border-b-2 border-black w-full text-3xl'>
          Iniciar Sesión
        </h1>

        <LoginForm />
      </div>
    </div>
  )
}

export default Login