import React from 'react';

const RatingBar = ({ rating }) => {
  // Redondear el número a un entero entre 0 y 10
  const roundedRating = Math.round(Math.min(Math.max(rating, 0), 10));

  // Crear un array con estrellas amarillas y grises
  const stars = Array.from({ length: 10 }, (_, index) => (
    <span key={index} className={`mr-0 text-sm ${index < roundedRating ? 'text-yellow-500' : 'text-gray-400'}`} >
      ★
    </span>
  ));

  return <div>{stars}</div>;
};

export default RatingBar;