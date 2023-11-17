import { RegisterForm } from '@/components/RegisterForm'
import React from 'react'

export const metadata = {
  title: "Register",
  description: "Home page",
}

const Register = () => {
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