import { mockGames } from "@/data/products";

const ProductsByCategory = ({ params }) => {

  const { categoria } = params;

  const games = categoria === 'all' ? mockGames : mockGames.filter( game => game.category.toLowerCase() === categoria.toLowerCase() );
  return (
    <div>ProductsByCategory: { games.length } </div>
  )
}

export default ProductsByCategory