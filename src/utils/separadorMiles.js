export const separadorMiles = (numero) => {
  // Verificar si el número es válido
  if (isNaN(numero)) {
    return numero;
  }

  // Convertir el número a cadena y dividir en parte entera y decimal
  var partes = numero.toString().split(".");
  var parteEntera = partes[0];
  var parteDecimal = partes.length > 1 ? "." + partes[1] : "";

  // Agregar separadores de miles a la parte entera
  parteEntera = parteEntera.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  // Devolver el número formateado
  return parteEntera + parteDecimal;
}