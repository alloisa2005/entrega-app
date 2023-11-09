import GameCard from '@/components/GameCard';
import { mockGames } from '@/data/products';
import React from 'react'

const ProductsByPlatform = ({ params }) => {
  const { plataforma } = params;

  const games = plataforma === 'all' ? mockGames : mockGames.filter( game => game.plataforma.toLowerCase() === plataforma.toLowerCase() );
  return (
    <div className="p-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

      {games.map( game => (
        <GameCard key={game.id} game={game} />
      ))}

    </div>
  )
}

export default ProductsByPlatform