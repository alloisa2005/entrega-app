import React from "react";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import MiBarChart from "@/components/Chart";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { getAnio } from "@/utils/getAnio";
import { getComprasMes } from "@/utils/estadisticas/estadisticas";


const ComprasXMes = async () => {

  const session = await getServerSession(authOptions)
  if(!session) {
    redirect('/tienda/categorias/all')
  }
  
  const compras = await getComprasMes();  

  const meses = compras.map(
    (compra) => `${compra.mes}/${getAnio(compra.anio)}`
  );
  const totales = compras.map((compra) => compra.total);

  return (
    <div className="px-2 col-span-5 row-span-2 h-full w-full flex items-center justify-center border-2 shadow-md rounded-md">
      <MiBarChart totales={totales} meses={meses} />
    </div>
  );
};

export default ComprasXMes;
