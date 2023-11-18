import GameCard from "@/components/GameCard";
import GamesList from "@/components/GamesList";
import { getProductos } from "@/utils/juegos/juegos";

export const metadata = {
  title: "Store",
  description: "Home page",
}

const ProductsByCategory = async ({ params, searchParams }) => {
  const { categoria } = params;  
  const { nombre } = searchParams;

  const games = await getProductos(categoria.toLowerCase(), nombre);  

  return (
    <>
      {games.length === 0 ? (
        <p className="text-center text-2xl font-semibold alturaMinima ">
          Lo sentimos, no tenemos productos de esta plataforma.
        </p>
      ) : (        
        <GamesList games={games} params={params} />       
      )}
    </>
  );
};

export default ProductsByCategory;
