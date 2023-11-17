import GameCard from "@/components/GameCard";
import { getProductos } from "@/utils/juegos/juegos";

export const metadata = {
  title: "Store",
  description: "Home page",
}

const ProductsByCategory = async ({ params }) => {
  const { categoria } = params;  
  const games = await getProductos(categoria.toLowerCase());

  return (
    <>
      {games.length === 0 ? (
        <p className="text-center text-2xl font-semibold alturaMinima ">
          Lo sentimos, no tenemos productos de esta plataforma.
        </p>
      ) : (        
        <div className="p-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {games.map((game) => (
            <GameCard key={game._id} game={game} />
          ))}
        </div>        
      )}
    </>
  );
};

export default ProductsByCategory;
