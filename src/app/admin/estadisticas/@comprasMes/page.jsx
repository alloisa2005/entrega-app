import MiBarChart from "@/components/Chart";
import React from "react";

const getComprasMes = async () => {
  const res = await fetch(
    "http://localhost:3000/api/estadisticas/comprasxmes", {next: { revalidate: 0 }}   
  );
  const data = await res.json();
  return data;
};

// funcion que reciba un anio por parametro y devuelva los dos ultimos digitos
const getAnio = (anio) => {
  const anioStr = anio.toString();
  return anioStr.slice(2, 4);
};

const ComprasXMes = async () => {
  const compras = await getComprasMes();
  const meses = compras.map(
    (compra) => `${compra.mes}/${getAnio(compra.anio)}`
  );
  const totales = compras.map((compra) => compra.total);

  return (
    <div className="col-span-5 row-span-2 h-full w-full flex items-center justify-center">
      <MiBarChart totales={totales} meses={meses} />
    </div>
  );
};

export default ComprasXMes;
