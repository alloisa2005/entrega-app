import { RegisterForm } from '@/components/RegisterForm'
import React from 'react'

const Register = () => {
  return (
    <div className='contenedor  flex items-center justify-center w-full h-full min-h-[calc(100vh-140px)]'>
      <div className='flex flex-col gap-3 items-center justify-center w-full h-full'>
        <h1 className='text-center border-b-2 border-black w-full text-3xl -mt-24'>Crea tu cuenta</h1>

        <RegisterForm />
      </div>
    </div>
  )
}

export default Register