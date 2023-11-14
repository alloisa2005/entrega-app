"use client";

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import Image from "next/image";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";


const TablaUsuarios = ({ data }) => {
  const [pageIndex, setPageIndex] = useState(1);
  const [filtered, setFiltered] = useState("");

  const [openAcciones, setOpenAcciones] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleOpciones = (user) => {
    console.log(user);
    setSelectedUser(user);
    setOpenAcciones(true);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setOpenAcciones(false);
  }

  const columns = [
    {
      header: "Foto",
      cell: (info) => {
        return (
          <div className="w-[35px] h-[35px] rounded-full overflow-hidden ml-2 -mr-4">
            <Image
              src={info.row.original.image}
              alt={info.row.original.nombre}
              width={70}
              height={50}
              className="w-full h-full object-cover"
            />
          </div>
        );
      },
    },
    {
      header: "Nombre",
      accessorKey: "nombre",
    },
    {
      header: "Email",
      accessorKey: "email",
    },
    {
      header: "Dirección",
      accessorKey: "direccion",
    },
    {
      header: "Admin",
      cell: (info) => {
        return (
          <p
            className={`${
              info.row.original.isAdmin ? "bg-green-500" : "bg-red-500"
            } px-2 w-[50px] rounded-xl text-white font-semibold text-center`}
          >
            {info.row.original.isAdmin ? "SI" : "NO"}
          </p>
        );
      },
    },
    {
      header: "Activo",
      cell: (info) => {
        return (
          <p
            className={`${
              info.row.original.activo ? "bg-green-500" : "bg-red-500"
            } font-bold px-2 w-[80px] rounded-xl text-white text-center`}
          >
            {info.row.original.activo ? "Activo" : "Baja"}
          </p>
        );
      },
    },
    {
      header: "Acciones",
      cell: (info) => {
        const userId = info.row.original._id;
        return (
          <div className="w-full flex gap-3">            
            <FaRegEdit
            onClick={() => handleOpciones(info.row.original)}
              size={22}
              className="text-green-400 hover:text-green-500 hover:cursor-pointer hover:scale-110 ease-in duration-300"
            />            
            <MdOutlineDelete
              size={24}
              className="text-red-400 hover:text-red-500 hover:cursor-pointer hover:scale-110 ease-in duration-300"
            />
          </div>
        );
      },
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter: filtered,
    },
    onGlobalFilterChange: setFiltered,
  });

  const paginaAnterior = () => {
    if (pageIndex !== 1) {
      setPageIndex(pageIndex - 1);
    }
    table.setPageIndex(0);
  };

  const paginaSiguiente = () => {
    if (pageIndex !== table.getPageCount()) {
      setPageIndex(pageIndex + 1);
    }
    table.setPageIndex(table.getPageCount() - 1);
  };

  return (
    <div className="w-full">
      <input
        type="text"
        value={filtered}
        onChange={(e) => setFiltered(e.target.value)}
        placeholder="Buscar usuario..."
        className="mb-2 w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
      />
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="">
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell, index) => (
                <td key={index}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-2 flex items-center justify-center gap-6">
        <div className="w-8 h-8 bg-black text-white font-bold rounded-lg flex items-center justify-center hover:scale-105 hover:shadow-md ease-in duration-300">
          <button className="w-full h-full text-sm" onClick={paginaAnterior}>
            {"<<"}
          </button>
        </div>
        <p className="italic text-sm">{`Página ${pageIndex} de ${table.getPageCount()}`}</p>
        <div className="w-8 h-8 bg-black text-white font-bold rounded-lg flex items-center justify-center hover:scale-105 hover:shadow-md ease-in duration-300">
          <button onClick={paginaSiguiente}>{">>"}</button>
        </div>
      </div>

      {openAcciones && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="w-[50%] h-[50%] bg-white rounded-md p-3">
            <div className="flex items-center justify-between border-b border-black my-2">
              <h2 className="text-xl font-semibold">Editar Usuario</h2>
              <AiFillCloseCircle size={28} onClick={closeModal}/>
            </div>
            
            <div className="flex items-center gap-4 mt-5">
              <div className="w-[70px] h-[70px] rounded-full overflow-hidden">
                <Image src={selectedUser.image} alt={selectedUser.name} width={50} height={50} className='w-full h-full object-cover' />
              </div>

              <div>
                <p className="text-xl">{selectedUser.nombre}</p>
                <p className="text-gray-500">{selectedUser.email}</p>
              </div>
            </div>  

            <div className="mt-6">
              <p>Dirección: {selectedUser.direccion}</p>
            </div>          
          </div>
        </div>
      )}
    </div>
  );
};

export default TablaUsuarios;
