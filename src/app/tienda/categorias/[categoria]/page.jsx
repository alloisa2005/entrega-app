import GamesList from "@/components/GamesList";
import { getProductos } from "@/utils/juegos/juegos";
import { Suspense } from "react";
import Skeleton from "./Skeleton";

export const metadata = {
  title: "Store",
  description: "Home page",
}

export const generateStaticParams = () => {
  return [
    { categoria: "ps4" },
    { categoria: "ps5" },
    { categoria: "xbox"  },
    { categoria: "ns"  },
    { categoria: "pc"  },
  ];
};
export const revalidate = 3600; // 1 hora

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
