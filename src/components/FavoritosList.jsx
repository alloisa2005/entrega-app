import React from 'react'
import GameCard from './GameCard';

const FavoritosList = ({ games }) => {
  return (          
    <div className="p-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {games.map((game) => (
        <GameCard key={game._id} game={game} />
      ))}
    </div>
    
  );
}

export default FavoritosList