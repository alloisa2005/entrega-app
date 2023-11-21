

export const getAllMensajes = async (leido = false) => {
  const url = leido
    ? `${process.env.NEXTAUTH_URL}/api/v1/mensajes?leido=SI`
    : `${process.env.NEXTAUTH_URL}/api/v1/mensajes`;

  const response = await fetch(url, { next: { revalidate: 0 } });

  const data = await response.json();
  return data;
};

export const guardarMensaje = async (email, nombre, mensaje) => {    

  const response = await fetch(`/api/v1/mensajes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, nombre, mensaje }),
  });

  if (!response.ok) {
    const data = await response.json();
    return { error: true, errorMsg: data.msg, data: "" };
  }

  const data = await response.json();
  return { error: false, errorMsg: "", data };
};
