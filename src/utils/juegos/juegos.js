import { uploadGameImage } from "../uploadImages";

export const getProductos = async (categoria = 'all') => {
  const response = await fetch(`http://localhost:3000/api/v1/productos/${categoria}`, 
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

  response = await fetch("http://localhost:3000/api/v1/productos/", {
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
  const response = await fetch(`http://localhost:3000/api/v1/productos/detail/${juegoId}`, 
    {next: {revalidate: 60}}
  );
  const data = await response.json();
  return data;
};

export const getProductosOrdenados = async (filtro) => {
  const response = await fetch(`http://localhost:3000/api/v1/productos/ordenados/${filtro}`, 
    {next: {revalidate: 600}}  // cada 10 min se actualiza
  );
  const data = await response.json();
  return data;
};