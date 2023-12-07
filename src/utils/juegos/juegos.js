import { uploadGameImage } from "../uploadImages";

export const getProductos = async (categoria = 'all', nombre='') => {

  const url = nombre === '' ? `${process.env.NEXT_PUBLIC_API_URL}/api/productos/${categoria}` 
                            : `${process.env.NEXT_PUBLIC_API_URL}/api/productos/${categoria}?nombre=${nombre}` 

  const response = await fetch(url,{next: {revalidate: 0}});
  
  const data = await response.json();
  return data;
};

export const saveProducto = async (titulo, categoria, precio, descripcion, trailer1, trailer2, trailer3, rating, boxImage, posterImage, stock) => {  

  let response = await uploadGameImage(boxImage);
  if(response.error){    
    return {error:true, errorMsg: response.errorMsg, data: ''};
  }  
  const cardImage = response.imgUrl;

  response = await uploadGameImage(posterImage);
  if(response.error){    
    return {error:true, errorMsg: response.errorMsg, data: ''};
  }  
  const bgImage = response.imgUrl;

  response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/productos/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      titulo, categoria, precio, descripcion, trailer1, trailer2, trailer3, rating,
      cardImage, bgImage, stock
    }),
  });

  if(!response.ok) {
    const data = await response.json();
    return {error:true, errorMsg: data.msg, data: ''};    
  }

  const data = await response.json(); 
  return {error:false, errorMsg: '', data};
}

export const getProductoById = async (juegoId) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/productos/detail/${juegoId}`, 
    {next: {revalidate: 60}}
  );
  const data = await response.json();
  return data;
};

export const getProductosOrdenados = async (filtro) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/productos/ordenados/${filtro}`, 
    {next: {revalidate: 180}}  // cada 3 min se actualiza
  );
  const data = await response.json();
  return data;
};

export const updateProducto = async (juegoId, titulo, categoria, precio, descripcion, trailer1, trailer2, trailer3, rating, stock) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/productos/producto/${juegoId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({titulo, categoria, precio, descripcion, trailer1, trailer2, trailer3, rating, stock }),    
  });

  const data = await response.json();
  return data;
};