'use client';

import Link from "next/link";

export const RegisterForm = () => {
  return (
    <form className="mt-4 md:mt-4 mb-6 w-full lg:max-w-[65%] flex flex-col gap-6 border-2 p-4 rounded-md shadow-md">
      <div className="flex flex-col">
        <label>Email</label>
        <input
          type="text"
          className="border rounded-md p-2 outline-none focus:border-black focus:shadow-md"
          placeholder="john@gmail.com"
        />
      </div>

      <div className="flex flex-col mt-3">
        <label>Contraseña</label>
        <input
          type="password"
          className="border rounded-md p-2 outline-none focus:border-black focus:shadow-md"
        />
      </div>

      <button className="bg-black py-2 text-white text-lg font-bold rounded-md shadow-md">
        Iniciar Sesión
      </button>

      <div className="flex justify-end items-center gap-3">
        <span className="font-semibold">¿Ya tienes una cuenta?</span>
        <Link href="/user/login" className="text-blue-500 hover:underline">
          Inicia Sesión
        </Link>
      </div>
    </form>
  );
};