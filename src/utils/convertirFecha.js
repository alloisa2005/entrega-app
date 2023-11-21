
export const convertirfecha = (fechaDB) => {
  // Convierte la cadena de fecha a un objeto Date
  const fecha = new Date(fechaDB);

  // Obtiene los componentes de la fecha (día, mes, año)
  let dia = fecha.getDate();
  let mes = fecha.getMonth() + 1; // ¡Ojo! Los meses en JavaScript son indexados desde 0
  let anio = fecha.getFullYear();

  // Asegura que el día y el mes tengan dos dígitos
  dia = dia < 10 ? '0' + dia : dia;
  mes = mes < 10 ? '0' + mes : mes;

  // Formatea la fecha como dd/mm/yyyy
  let fechaFormateada = dia + '/' + mes + '/' + anio;

  return fechaFormateada;
}