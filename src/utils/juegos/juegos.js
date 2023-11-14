
export const getProductos = async (categoria = 'all') => {
  const response = await fetch(`http://localhost:3000/api/v1/productos/${categoria}`, 
    {next: {revalidate: 0}}
  );
  const data = await response.json();
  return data;
};