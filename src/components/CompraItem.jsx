import { convertirfecha } from "@/utils/convertirFecha";
import { separadorMiles } from "@/utils/separadorMiles";
import Image from "next/image";
import React from "react";
import { IoIosArrowDown, IoIosArrowUp  } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";

const CompraItem = ({ compra, onClick, selected, index }) => {  

  const productosCompra = compra.productos;  

  return (
    <div onClick={onClick} className="border border-black p-2 mb-4 rounded-md shadow-sm font-montserrat">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-6">
          <p className="font-bold">{convertirfecha(compra.createdAt)}</p>
          <p className="font-semibold text-gray-500 italic">
            Monto ($): {separadorMiles(compra.montoTotal)}
          </p>
        </div>
        {
          selected === index ? <IoIosArrowUp size={20}/> : <IoIosArrowDown size={20}/>
        }
      </div>

      {
        selected === index && (          
          <>
          {
            productosCompra.map((producto) => (
              <div key={producto.producto._id} className='flex items-center gap-3 mb-2'>
                <Image 
                  className="w-12 h-16 object-contain"
                  src={producto.producto.boxImage} 
                  alt={producto.producto.titulo} 
                  width={50} 
                  height={50} />
                <div className="flex items-center gap-24">
                  <p className="font-semibold italic text-sm">{producto.producto.titulo} (x {producto.cantidad})</p>
                  <p className="font-semibold italic text-sm">SubTotal ($): {producto.producto.precio*producto.cantidad}</p>
                </div>
              </div>
            ))
          }
          <div className="ml-2 flex items-center gap-3 mt-1">
            <TbTruckDelivery size={45} />
            <p className="font-semibold italic text-sm">Envío ($): {compra.envio}</p>
          </div>
          </>             
        )
      }
    </div>
  );
};

export default CompraItem;
