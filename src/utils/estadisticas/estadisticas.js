
export const getComprasMes = async () => {
  const res = await fetch(
    "http://localhost:3000/api/estadisticas/comprasxmes", {next: { revalidate: 0 }}   
  );
  const data = await res.json();
  return data;
};

export const getUsersMasCompras = async () => {
  const res = await fetch(
    "http://localhost:3000/api/estadisticas/usermascompras", {next: { revalidate: 0 }}   
  );
  const data = await res.json();
  return data;
};

export const getJuegosMasVendidos = async () => {
  const res = await fetch(
    "http://localhost:3000/api/estadisticas/juegosmasvendidos", {next: { revalidate: 0 }}   
  );
  const data = await res.json();
  return data;
};