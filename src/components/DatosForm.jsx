"use client";

import { convertirfecha } from "@/utils/convertirFecha";
import { actualizarDireccionUsuario } from "@/utils/usuarios/usuarios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import MiModal from "./MiModal";
import Spinner from "./Spinner";

const DatosForm = () => {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [newDireccion, setNewDireccion] = useState(session.user.direccion);
  const [modal, setModal] = useState({ error: false, msg: "" });

  const handleEditAddress = async () => {
    setLoading(true);
    await actualizarDireccionUsuario(session.user._id, newDireccion);    
    setLoading(false);
    setModal({ error: false, msg: "Dirección actualizada con éxito. Vuelva a iniciar sesión para ver los cambios." });
  };

  return (
    <>
      <div className=" mt-4 font-montserrat">
        <div className="flex items-center gap-10">
          <Image
            src={session.user.image}
            alt={session.user.nombre}
            width={100}
            height={100}
            className="rounded-full w-[140px] h-[140px] object-cover"
          />

          <div className="flex flex-col gap-1">
            <p className="text-6xl font-semibold font-caveat">
              {session.user.nombre}
            </p>
            <p className="text-lg text-gray-500 font-bold">
              {session.user.email}
            </p>
            <p className="text-md text-gray-400 italic">
              Creación: {convertirfecha(session.user.createdAt)}
            </p>
          </div>
        </div>

        <div className="flex flex-col mt-10">
          <label className="font-bold text-md">Dirección</label>
          <div className="flex items-center justify-between gap-8">
            <input
              value={newDireccion}
              onChange={(e) => setNewDireccion(e.target.value)}
              type="text"
              className="w-full border rounded-md p-2 outline-none focus:border-black focus:shadow-md"
            />
            {loading ? (
              <Spinner />
            ) : (
              <FaRegEdit
                size={30}
                className="text-gray-500 hover:cursor-pointer hover:text-black ease-in duration-200"
                onClick={handleEditAddress}
              />
            )}
          </div>
        </div>

        <div className="border border-gray-400 shadow-md rounded-md mt-10 px-2 py-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-32">
          <Link href={'/tienda/categorias/all'} className='py-2 w-full flex justify-center bg-black font-semibold text-white rounded-md hover:shadow-lg ease-in duration-300'>
            <p>Tienda</p>
          </Link>
          <Link href={'/carrito'} className='py-2 w-full flex justify-center bg-black font-semibold text-white rounded-md hover:shadow-lg ease-in duration-300'>
            <p>Mi Carrito</p>
          </Link>
          <Link href={'/compras'} className='py-2 w-full flex justify-center bg-black font-semibold text-white rounded-md hover:shadow-lg ease-in duration-300'>
            <p>Mis Compras</p>
          </Link>
        </div>
      </div>

      {modal.msg && (
        <MiModal
          error={modal.error}
          mensaje={modal.msg}
          closeFn={() => setModal({ error: false, msg: "" })}
        />
      )}
    </>
  );
};

export default DatosForm;
