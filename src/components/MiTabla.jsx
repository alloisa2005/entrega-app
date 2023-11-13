'use client';

import { separadorMiles } from "@/utils/separadorMiles";
import { useReactTable, getCoreRowModel, flexRender, getPaginationRowModel } from "@tanstack/react-table";
import Image from "next/image";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete }  from "react-icons/md";

const MiTabla = ({ data }) => {

  const [pageIndex, setPageIndex] = useState(1);
  const columns = [
    {
      header: "Foto",
      cell: info => {        
        return <div className="w-[50px] bg-red-200 ml-2 -mr-4">
          <Image src={info.row.original.image} alt={info.row.original.name} width={70} height={50} className='w-full object-contain' />
        </div>
      }
    },
    {
      header: "Nombre",
      accessorKey: "name",
    },
    {
      header: "Precio ($)",
      cell: info => {        
        return <p>{separadorMiles(info.row.original.price)}</p>
      }
    },
    {
      header: "Stock",
      accessorKey: "stock",
    },
    {
      header: "Categoría",
      accessorKey: "category",
    },
    {
      header: "Plataforma",
      cell: info => {        
        return <div className="uppercase">
          <p>{info.row.original.plataforma}</p>
        </div>
      }
    },
    {
      header: "Acciones",
      cell: info => {        
        return <div className="w-full flex gap-3">          
          <FaRegEdit size={22} className='text-green-400 hover:text-green-500 hover:cursor-pointer hover:scale-110 ease-in duration-300' />          
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
              <tr key={row.id}>
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

export default MiTabla

