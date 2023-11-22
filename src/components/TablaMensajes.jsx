'use client';

import { useReactTable, getCoreRowModel, flexRender, getPaginationRowModel, getFilteredRowModel } from "@tanstack/react-table";
import Link from "next/link";
import { useState } from "react";
import { MdOutlineDelete }  from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import Image from "next/image";
import { borrarMensaje, leerMensaje } from "@/utils/mensajes/mensajes";
import { useRouter } from "next/navigation";

const TablaMensajes = ({ data }) => {    

  const router = useRouter();

  const [pageIndex, setPageIndex] = useState(1);
  const [filtered, setFiltered] = useState('');
  const [selectedMsg, setSelectedMsg] = useState(null);

  const handleSelectMsg = (msg) => {
    setSelectedMsg(msg);
  }  

  const closeModal = async () => {

    if(!selectedMsg.leido) {
      await leerMensaje(selectedMsg._id)
      router.refresh();
    }    
    setSelectedMsg(null);  
  }

  const handleDeleteMsg = async (mensajeId) => {
    await borrarMensaje(mensajeId);
    router.refresh();
  }

  const columns = [    
    {
      header: "Fecha",
      accessorKey: "createdAt",
      cell: info => {
        const leido = info.row.original.leido;        
        const date = new Date(info.getValue());
        const fecha = date.toLocaleDateString();
        const hora = date.toLocaleTimeString();
        return <p onClick={() => handleSelectMsg(info.row.original)} className={`${!leido ? 'font-bold' : ''} hover:cursor-pointer`}>{fecha} - {hora}</p>
      }
    },    
    {
      header: "Email",
      accessorKey: "email",
      cell: info => {
        const leido = info.row.original.leido;
        return <p onClick={() => handleSelectMsg(info.row.original)}  className={`${!leido ? 'font-bold' : ''} hover:cursor-pointer`}>{info.getValue()}</p>
      }
    },  
    {
      header: "Nombre",
      accessorKey: "nombre",
      cell: info => {
        const leido = info.row.original.leido;
        return <p onClick={() => handleSelectMsg(info.row.original)}  className={`${!leido ? 'font-bold' : ''} hover:cursor-pointer`}>{info.getValue()}</p>
      }
    }, 
    {
      header: "Asunto",
      accessorKey: "asunto",
      cell: info => {
        const leido = info.row.original.leido;
        return <p onClick={() => handleSelectMsg(info.row.original)}  className={`${!leido ? 'font-bold' : ''} hover:cursor-pointer`}>{info.getValue()}</p>
      }
    },           
    {
      header: "Acciones",
      cell: info => {   
        const mensajeId = info.row.original._id;
        return <div className="w-full flex gap-3">                  
          <MdOutlineDelete onClick={() => handleDeleteMsg(mensajeId)}
            size={24} className='text-red-400 hover:text-red-500 hover:cursor-pointer hover:scale-110 ease-in duration-300' />           
        </div>
      }
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
    if(pageIndex !== 1) {      
      setPageIndex(pageIndex-1)      
    }
    table.setPageIndex(0)
  }

  const paginaSiguiente = () => {
    if(pageIndex !== table.getPageCount()) {
      setPageIndex(pageIndex+1)
    }
    table.setPageIndex(table.getPageCount()-1)
  }

  return (
    <div className="w-full">
      <input 
        type="text"
        value={filtered}
        onChange={(e) => setFiltered(e.target.value)}
        placeholder="Buscar mensaje..."
        className="mb-2 w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
      />
      <table>
        <thead>
          {
            table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="">
                {
                  headerGroup.headers.map((header) => (
                    <th key={header.id}>{flexRender(header.column.columnDef.header, header.getContext())}</th>
                  ))
                }
              </tr>
            ))
          }
        </thead>

        <tbody>
          {
            table.getRowModel().rows.map( row => (
              <tr key={row.id} >
                {
                  row.getVisibleCells().map( (cell, index) => (
                    <td key={index}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext()) }
                    </td>
                  ))
                }  
              </tr>
            ))
          }
        </tbody>
      </table>

      <div className="mt-2 flex items-center justify-center gap-6">
          <div className="w-8 h-8 bg-black text-white font-bold rounded-lg flex items-center justify-center hover:scale-105 hover:shadow-md ease-in duration-300">
            <button className="w-full h-full text-sm" onClick={paginaAnterior}>{'<<'}</button>          
          </div>
          <p className="italic text-sm">{`Página ${pageIndex} de ${table.getPageCount()}`}</p>
          <div className="w-8 h-8 bg-black text-white font-bold rounded-lg flex items-center justify-center hover:scale-105 hover:shadow-md ease-in duration-300">
            <button onClick={paginaSiguiente}>{'>>'}</button>          
          </div>
      </div>

      {selectedMsg && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="w-[35%]  bg-white rounded-md py-3 px-5">
            <div className="flex items-center justify-between border-b border-black my-2">
              <h2 className="text-xl font-semibold">Mensaje</h2>
              <AiFillCloseCircle size={28} onClick={closeModal} className='hover:cursor-pointer' />
            </div>
            
            <div className="flex flex-col  gap-2 mt-5"> 
              <div className="flex items-center gap-2">
                <h2>De:</h2>
                <p className="font-semibold">{selectedMsg.nombre}</p>
              </div>
              <div className="flex items-center gap-2">
                <h2>Email:</h2>
                <p className="font-semibold">{selectedMsg.email}</p>
              </div>
              <hr />
              <div className="mt-4 flex items-center gap-1">
                <h2>Asunto:</h2>
                <p className="font-semibold">{selectedMsg.asunto}</p>
              </div>
              <div className="mt-1 flex flex-col gap-1">
                <h2>Mensaje:</h2>
                <p className="font-semibold bg-gray-200/50 p-2 rounded-md">{selectedMsg.mensaje}</p>
              </div>
            </div>                          
            
          </div>
        </div>
      )}
    </div>
  )
}

export default TablaMensajes

