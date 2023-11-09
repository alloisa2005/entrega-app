import { separadorMiles } from '@/utils/separadorMiles'

const DetalleCompra = () => {
  return (
    <div className='mt-4 flex flex-col gap-1'>
      <div className='flex items-center justify-between px-2'>
        <p className='font-bold'>Cantidad de productos: </p>
        <p className='text-gray-500 font-bold'>2</p>
      </div>
      <div className='flex items-center justify-between px-2'>
        <p className='font-bold'>Sub Total ($):</p>
        <p className='text-gray-500 font-bold'>{separadorMiles(2800)}</p>
      </div>
      <div className='flex items-center justify-between px-2'>
        <p className='font-bold'>Envío ($):</p>
        <p className='text-gray-500 font-bold'>{separadorMiles(500)}</p>
      </div>
      <div className='flex items-center justify-between px-2 text-lg'>
        <p className='font-bold'>Total ($):</p>
        <p className='text-red-500 font-bold'>{separadorMiles(3300)}</p>
      </div>            

      <div className='rounded-md py-2 md:py-3 mt-3 mb-1 text-center bg-black hover:bg-black/80 text-white hover:cursor-pointer ease-in duration-300'>
        <p className='font-bold'>Confirmar Compra</p>
      </div>
    </div>
  )
}

export default DetalleCompra