

export const addToCartAPI = async (usuarioId, productoId, precio, cantidad) => {
  const response = await fetch('/api/cart', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ usuarioId, productoId, precio, cantidad }),
  });

  const data = await response.json();
  return data;
};

export const getUserCartAPI = async (usuarioId) => {
  const response = await fetch(`http://localhost:3000/api/cart/${usuarioId}`, {next:{revalidate:0}});
  const data = await response.json();
  return data;
}; 
