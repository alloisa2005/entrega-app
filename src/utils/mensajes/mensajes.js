

export const getAllMensajes = async (leido = false) => {
  const url = leido
    ? `${process.env.NEXTAUTH_URL}/api/mensajes?leido=SI`
    : `${process.env.NEXTAUTH_URL}/api/mensajes`;

  const response = await fetch(url, { next: { revalidate: 0 } });

  const data = await response.json();
  return data;
};

export const guardarMensaje = async (email, nombre, asunto, mensaje) => {    

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/mensajes`, {
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

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/mensajes/${mensajeId}`, {
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

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/mensajes/${mensajeId}`, {
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
