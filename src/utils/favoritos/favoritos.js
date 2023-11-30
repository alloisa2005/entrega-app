
export const getFavoritosByUser = async (userId) => {
  const url = `http://localhost:3000/api/favoritos/${userId}`;    

  const response = await fetch(url, { next: { revalidate: 0 } });

  const data = await response.json();  
  return data;
};

export const addToFavoritos = async (userId, productoId) => {  

  const url = `http://localhost:3000/api/favoritos`;

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, productoId })
  });

  const data = await response.json();
  return data;


};

export const removeFromFavoritos = async (userId, productoId) => {
  
  const url = `http://localhost:3000/api/favoritos`;
  
    const response = await fetch(url, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, productoId })
    });
  
    const data = await response.json();
    return data;
};
