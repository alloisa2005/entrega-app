import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { RegisterForm } from '@/components/RegisterForm'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

export const metadata = {
  title: "Register",
  description: "Home page",
}

const Register = async () => {

  const session = await getServerSession(authOptions)

  if (session) {
    redirect('/tienda/categorias/all')
  }

  return (
    <div className='font-montserrat contenedor  flex items-center justify-center w-full'>
      <div className='flex flex-col gap-3 items-center justify-center w-full h-full'>
        <h1 className='font-semibold text-center border-b-2 border-black w-full text-3xl my-4'>Crea tu cuenta</h1>

        <RegisterForm />
      </div>      
    </div>
  )
}

export default Register