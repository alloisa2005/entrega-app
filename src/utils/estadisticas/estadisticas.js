
export const getComprasMes = async () => {
  const res = await fetch(
    "http://localhost:3000/api/estadisticas/comprasxmes", {cache: 'no-cache'}   
  );
  const data = await res.json();
  return data;
};

export const getUsersMasCompras = async () => {
  const res = await fetch(
    "http://localhost:3000/api/estadisticas/usermascompras", {cache: 'no-cache'}   
  );
  const data = await res.json();
  return data;
};

export const getJuegosMasVendidos = async () => {
  const res = await fetch(
    "http://localhost:3000/api/estadisticas/juegosmasvendidos", {cache: 'no-cache'}   
  );
  const data = await res.json();
  return data;
};