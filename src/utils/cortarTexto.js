export const cortarTexto = (texto, largo=20) => {  
  if (texto.length > largo) {  
    return texto.substring(0, largo) + '...';
  } else {  
    return texto;
  }
}