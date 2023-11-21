"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import MiModal from "./MiModal";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!email.trim() || !password.trim()) {
      setLoading(false);
      setError("Ingrese email y/o contraseña");
      return;
    }    
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mt-4 md:mt-8 mb-6 w-full lg:max-w-[50%] flex flex-col justify-center gap-6 border-2 p-4 rounded-md shadow-md"
      >        
        <div className="flex flex-col">
          <motion.label
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            exit={{ x: -50, opacity: 0 }}
          >            
            Email
          </motion.label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="border rounded-md p-2 outline-none focus:border-black focus:shadow-md"
            placeholder="john@gmail.com"
          />
        </div>

        <div className="flex flex-col mt-3">
          <motion.label
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            exit={{ x: 50, opacity: 0 }}
          >
            Contraseña
          </motion.label>
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
        <MiModal titulo={'ERROR'} mensaje={error} closeFn={() => setError('')} />
      )}
    </>
  );
};
