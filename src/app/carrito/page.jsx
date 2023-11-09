import CarritoCard from '@/components/CarritoCard'
import DetalleCompra from '@/components/DetalleCompra'
import MetodosPago from '@/components/MetodosPago'

const Carrito = () => {

  const estiloDiv = {
    minHeight: 'calc(100vh - 152px)',
    // Otros estilos en línea aquí
  };

  return (
    <div className='contenedor my-4 alturaMinima' >
      <p className='border-b-2 border-black text-2xl italic'>Mi Carrito</p>

      <div className='mt-3 flex flex-col-reverse lg:flex-row justify-between gap-3'>
        {/* Lista de Prods */}
        <div className='flex flex-col gap-3 w-full border rounded-md shadow-md p-2'>
          <CarritoCard />

          <CarritoCard />
          
        </div>

        {/* Detalle de compra */}
        <div className='border rounded-md shadow-md w-full lg:w-[30%] p-2'>
          <p className='text-center text-xl font-bold'>Detalle de Compra</p>

          <MetodosPago />

          <DetalleCompra />
        </div>
      </div>
    </div>
  )
}

export default Carrito