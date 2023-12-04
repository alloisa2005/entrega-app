import { convertirfecha } from "@/utils/convertirFecha";
import { separadorMiles } from "@/utils/separadorMiles";
import React from "react";
import { IoIosArrowDown, IoIosArrowUp  } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";

const CompraItem = ({ compra, onClick, selected, index }) => {  

  return (
    <div onClick={onClick} className="border border-black p-2 mb-4 rounded-md shadow-sm font-montserrat">
      <div className="flex items-center justify-between">
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
          <TbTruckDelivery size={25} />
        )
      }
    </div>
  );
};

export default CompraItem;
