import { uploadGameImage } from "../uploadImages";

export const getProductos = async (categoria = 'all') => {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/v1/productos/${categoria}`, 
    {next: {revalidate: 60}}
  );
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

  response = await fetch(`${process.env.NEXTAUTH_URL}/api/v1/productos/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",s
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
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/v1/productos/detail/${juegoId}`, 
    {next: {revalidate: 60}}
  );
  const data = await response.json();
  return data;
};

export const getProductosOrdenados = async (filtro) => {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/v1/productos/ordenados/${filtro}`, 
    {next: {revalidate: 180}}  // cada 3 min se actualiza
  );
  const data = await response.json();
  return data;
};

export const updateProducto = async (juegoId, titulo, categoria, precio, descripcion, trailer1, trailer2, trailer3, rating, stock) => {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/v1/productos/api/v1/productos/producto/${juegoId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({titulo, categoria, precio, descripcion, trailer1, trailer2, trailer3, rating, stock }),    
  });

  const data = await response.json();
  return data;
};