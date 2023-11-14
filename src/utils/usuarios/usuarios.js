const { uploadUserImage } = require("../uploadImages");

export const saveUser = async (nombre, email, direccion, password, fileImg) => {

  let response = await uploadUserImage(fileImg);

  if(response.error){    
    return {error:true, errorMsg: response.errorMsg, data: ''};
  }  

  const image = response.imgUrl;

  response = await fetch("http://localhost:3000/api/v1/usuarios/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombre,
      email,
      direccion,
      password,
      image
    }),
  });

  if(!response.ok) {
    const data = await response.json();
    return {error:true, errorMsg: data.msg, data: ''};    
  }

  const data = await response.json(); 
  return {error:false, errorMsg: '', data};
};

export const getUserById = async (id) => {
  const response = await fetch(`http://localhost:3000/api/v1/usuarios/${id}`);
  const data = await response.json();
  return data;
}