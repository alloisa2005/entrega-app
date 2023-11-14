"use client";

import { uploadUserImage } from "@/utils/uploadImages";
import { saveUser } from "@/utils/usuarios/saveUser";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MiModal from "./MiModal";
import Spinner from "./Spinner";

export const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [fileImg, setFileImg] = useState(null);
  const [loading, setLoading] = useState(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!selectedImage) {
      setLoading(false);
      setError("Seleccione una imagen");
      return;
    }

    if (!nombre.trim() || !email.trim() || !direccion.trim() || !password.trim()) {
      setLoading(false);
      setError("Todos los campos son obligatorios");
      return;
    }

    try {

      const data = await saveUser(nombre, email, direccion, password, fileImg);

      if(data.error){
        setError(data.errorMsg);
      }else{
        setError("Usuario creado con éxito");
      }
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mb-6 w-full lg:max-w-[65%] flex flex-col gap-4 border-2 p-4 rounded-md shadow-md"
      >
        <div className="flex justify-center">
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            hidden
            onChange={handleSelectedImage}
          />
          <div
            onClick={handleSelectImage}
            className="relative rounded-full w-[140px] h-[140px] border-2 overflow-hidden border-black/80  hover:border-black ease-out duration-300 hover:cursor-pointer hover:shadow-lg flex items-center justify-center"
          >
            <Image
              src={selectedImage ? selectedImage : "/images/selection.png"}
              width={140}
              height={140}
              className={`object-cover ${
                selectedImage
                  ? "w-full h-full"
                  : "w-[55%] md:w-[60%] h-[55%] md:h-[60%]"
              }`}
              alt="Img User"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-5 items-center justify-between w-full">
          <div className="w-full flex flex-col">
            <label className="font-bold">Nombre</label>
            <input
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              type="text"
              className="border rounded-md p-2 outline-none focus:border-black focus:shadow-md"
              placeholder="John Doe"
            />
          </div>

          <div className="w-full flex flex-col">
            <label className="font-bold">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="border rounded-md p-2 outline-none focus:border-black focus:shadow-md"
              placeholder="john@gmail.com"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="font-bold">Dirección</label>
          <input
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            type="text"
            className="border rounded-md p-2 outline-none focus:border-black focus:shadow-md"
            placeholder="Calle 445"
          />
        </div>

        <div className="flex flex-col mt-3">
          <label className="font-bold">Contraseña</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="border rounded-md p-2 outline-none focus:border-black focus:shadow-md"
          />
        </div>

        <button className="bg-black py-2 text-white text-lg font-bold rounded-md shadow-md">
          {loading ? <Spinner /> : "Crear Cuenta"}
        </button>

        <div className="flex justify-end items-center gap-3">
          <span className="font-semibold">¿Ya tienes una cuenta?</span>
          <Link href="/user/login" className="text-blue-500 hover:underline">
            Inicia Sesión
          </Link>
        </div>
      </form>

      {error && (
        <MiModal
          titulo={"ERROR"}
          mensaje={error}
          closeFn={() => setError("")}
        />
      )}
    </>
  );
};
