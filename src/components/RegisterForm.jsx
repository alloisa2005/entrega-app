'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const RegisterForm = () => {

  const [selectedImage, setSelectedImage] = useState("");
  const [fileImg, setFileImg] = useState(null);
  const [error, setError] = useState("");

  const handleSelectImage = () => {
    setError("");
    document.getElementById("fileInput").click();
  };

  const handleSelectedImage = (e) => {
    const file = e.target.files[0];
    setFileImg(file);

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();    
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 md:mt-4 mb-6 w-full lg:max-w-[65%] flex flex-col gap-6 border-2 p-4 rounded-md shadow-md">

      <div className="flex justify-center mb-1">
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          hidden
          onChange={handleSelectedImage}
        />
        <div onClick={handleSelectImage} className="rounded-full w-[140px] h-[140px] border-2 overflow-hidden border-black/80  hover:border-black ease-out duration-300 hover:cursor-pointer hover:shadow-lg">
          {selectedImage && (
            <Image
              src={selectedImage}
              width={140}
              height={140}
              className="object-cover w-full h-full "
              alt="Img User"
            />
          )}
        </div>
      </div>

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