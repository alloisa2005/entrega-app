"use client";

import Link from "next/link";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("Email o contraseña inavlidos");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mt-4 md:mt-8 mb-6 w-full lg:max-w-[50%] flex flex-col justify-center gap-6 border-2 p-4 rounded-md shadow-md"
      >
        <div className="flex flex-col">
          <label>Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="border rounded-md p-2 outline-none focus:border-black focus:shadow-md"
            placeholder="john@gmail.com"
          />
        </div>

        <div className="flex flex-col mt-3">
          <label>Contraseña</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="border rounded-md p-2 outline-none focus:border-black focus:shadow-md"
          />
        </div>

        <button
          disabled={loading}
          className={`${
            loading ? "bg-gray-400" : "bg-black"
          } py-2 text-white text-lg font-bold rounded-md shadow-md`}
        >
          Iniciar Sesión
        </button>

        <div className="flex justify-end items-center gap-3">
          <span className="font-semibold">¿No tienes cuenta?</span>
          <Link href="/user/register" className="text-blue-500 hover:underline">
            Regístrate
          </Link>
        </div>
      </form>

      {error && (
        <div className="px-4 absolute w-full top-0 left-0 bottom-0 bg-black/60 z-20 flex items-center justify-center">
          
          <div className="p-3 w-full md:w-[45%]  bg-white rounded-md">
            <div className="flex items-center justify-between mb-3">
              <p className="text-center text-red-500 font-bold text-xl">ERROR</p>
              <AiFillCloseCircle onClick={() => setError('')}
                size={28} 
                className='text-red-500 hover:scale-110 hover:cursor-pointer ease-in duration-300' 
              />
            </div>
            {error}            
          </div>
          
        </div>
      )}
    </>
  );
};
