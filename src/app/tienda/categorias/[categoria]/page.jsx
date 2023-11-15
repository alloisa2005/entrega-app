import GameCard from "@/components/GameCard";
import { getProductos } from "@/utils/juegos/juegos";


const ProductsByCategory = async ({ params }) => {

  const { categoria } = params;
  //const games = categoria === 'all' ? mockGames : mockGames.filter( game => game.category.toLowerCase() === categoria.toLowerCase() );
  const games = await getProductos(categoria)

  return (
    <div className="p-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

      {games.map( game => (        
        <GameCard key={game._id} game={game} />        
      ))}

    </div>
  )
}

export default ProductsByCategory