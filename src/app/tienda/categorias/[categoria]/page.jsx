import GameCard from "@/components/GameCard";
import { mockGames } from "@/data/products";
import Image from "next/image";

const ProductsByCategory = ({ params }) => {

  const { categoria } = params;

  const games = categoria === 'all' ? mockGames : mockGames.filter( game => game.category.toLowerCase() === categoria.toLowerCase() );
  return (
    <div className="p-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

      {games.map( game => (
        <GameCard key={game.id} game={game} />
      ))}

    </div>
  )
}

export default ProductsByCategory