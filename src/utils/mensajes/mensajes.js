

export const getAllMensajes = async (leido = false) => {
  const url = leido
    ? `${process.env.NEXTAUTH_URL}/api/v1/mensajes?leido=SI`
    : `${process.env.NEXTAUTH_URL}/api/v1/mensajes`;

  const response = await fetch(url, { next: { revalidate: 0 } });

  const data = await response.json();
  return data;
};

export const guardarMensaje = async (email, nombre, asunto, mensaje) => {    

  const response = await fetch(`/api/v1/mensajes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, nombre, asunto, mensaje }),
  });

  if (!response.ok) {
    const data = await response.json();
    return { error: true, errorMsg: data.msg, data: "" };
  }

  const data = await response.json();
  return { error: false, errorMsg: "", data };
};

export const leerMensaje = async (mensajeId) => {

  const response = await fetch(`http://localhost:3000/api/v1/mensajes/${mensajeId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ leido: "SI" }),
  });

  if (!response.ok) {
    const data = await response.json();
    return { error: true, errorMsg: data.msg, data: "" };
  }

  const data = await response.json();
  return { error: false, errorMsg: "", data };
};

export const borrarMensaje = async (mensajeId) => {

  const response = await fetch(`http://localhost:3000/api/v1/mensajes/${mensajeId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const data = await response.json();
    return { error: true, errorMsg: data.msg, data: "" };
  }

  const data = await response.json();
  return { error: false, errorMsg: "", data };

};
