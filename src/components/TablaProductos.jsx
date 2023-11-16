'use client';

import { separadorMiles } from "@/utils/separadorMiles";
import { useReactTable, getCoreRowModel, flexRender, getPaginationRowModel, getFilteredRowModel } from "@tanstack/react-table";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete }  from "react-icons/md";

const TablaProductos = ({ data }) => {

  const [pageIndex, setPageIndex] = useState(1);
  const [filtered, setFiltered] = useState('');

  const columns = [
    {
      header: "Foto",
      cell: info => {               
        return <div className="w-[50px] h-[50px] overflow-hidden ml-2 -mr-4">
        <Image
          src={info.row.original.boxImage}
          alt={info.row.original.titulo}
          width={70}
          height={50}
          className="w-full h-full object-cover"
        />
      </div> 
      }
    },
    {
      header: "Nombre",
      accessorKey: "titulo",
    },
    {
      header: "Stock",
      accessorKey: "stock",
    },  
    {
      header: "Precio ($)",
      cell: info => {        
        return <p>{separadorMiles(info.row.original.precio)}</p>
      }
    },     
    {
      header: "Plataforma",
      cell: info => {        
        return <div className="uppercase">
          <p>{info.row.original.categoria}</p>
        </div>
      }
    },
    {
      header: "Rating",
      accessorKey: "rating",
    }, 
    {
      header: "Acciones",
      cell: info => {   
        const juegoId = info.row.original._id;
        return <div className="w-full flex gap-3">  
        <Link href={`/admin/editJuego/${juegoId}`}>
          <FaRegEdit size={22} className='text-green-400 hover:text-green-500 hover:cursor-pointer hover:scale-110 ease-in duration-300' />          
        </Link>
        
          <MdOutlineDelete size={24} className='text-red-400 hover:text-red-500 hover:cursor-pointer hover:scale-110 ease-in duration-300' />           
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
        placeholder="Buscar juego..."
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
    </div>
  )
}

export default TablaProductos

