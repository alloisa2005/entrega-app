
export const getComprasMes = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/estadisticas/comprasxmes`, {cache: 'no-cache'}   
  );
  const data = await res.json();
  return data;
};

export const getUsersMasCompras = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/estadisticas/usermascompras`, {cache: 'no-cache'}   
  );
  const data = await res.json();
  return data;
};

export const getJuegosMasVendidos = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/estadisticas/juegosmasvendidos`, {cache: 'no-cache'}   
  );
  const data = await res.json();
  return data;
};