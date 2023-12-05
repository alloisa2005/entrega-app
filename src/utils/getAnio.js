
// funcion que reciba un anio por parametro y devuelva los dos ultimos digitos
export const getAnio = (anio) => {
  const anioStr = anio.toString();
  return anioStr.slice(2, 4);
};