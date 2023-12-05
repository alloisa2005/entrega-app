
export const nombreMes = (numeroMes) => {
  // Array con los nombres de los meses en español
  const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
        "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  
  if (numeroMes >= 1 && numeroMes <= 12) {
    
    const indiceMes = numeroMes - 1;    
    return meses[indiceMes];

  } else {    
    return "Error";
  }
}