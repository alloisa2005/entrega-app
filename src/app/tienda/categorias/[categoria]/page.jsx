import GamesList from "@/components/GamesList";
import { getProductos } from "@/utils/juegos/juegos";
import { Suspense } from "react";
import Skeleton from "./Skeleton";

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
        <Suspense fallback={<Skeleton />}>
          <GamesList games={games} params={params} />       
        </Suspense>
      )}
    </>
  );
};

export default ProductsByCategory;
