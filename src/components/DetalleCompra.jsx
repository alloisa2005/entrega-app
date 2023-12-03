'use client'
import { separadorMiles } from '@/utils/separadorMiles'
import { useSelector } from 'react-redux'

const DetalleCompra = () => {

  const { cartTotalAmount, cartTotalItems } = useSelector(state => state.cart);

  const handleFinalizaCompra = () => {
    
  }

  return (
    <div className='mt-4 flex flex-col gap-1'>
      <div className='flex items-center justify-between px-2'>
        <p className='font-bold'>Cantidad de productos: </p>
        <p className='text-gray-500 font-bold'>{cartTotalItems}</p>
      </div>
      <div className='flex items-center justify-between px-2'>
        <p className='font-bold'>Sub Total ($):</p>
        <p className='text-gray-500 font-bold'>{separadorMiles(cartTotalAmount)}</p>
      </div>
      <div className='flex items-center justify-between px-2'>
        <p className='font-bold'>Envío 5% ($):</p>
        <p className='text-gray-500 font-bold'>{separadorMiles((cartTotalAmount*5/100).toFixed(0))}</p>
      </div>
      <div className='flex items-center justify-between px-2 text-lg'>
        <p className='font-bold'>Total ($):</p>
        <p className='text-red-500 font-bold'>{separadorMiles((cartTotalAmount + (cartTotalAmount*5/100)).toFixed(0))}</p>
      </div>            

      <button          
        onClick={handleFinalizaCompra}
        disabled={cartTotalItems === 0}
        className={`rounded-md py-2 md:py-3 mt-3 mb-1 text-center ${cartTotalItems === 0 ? 'bg-gray-500' : 'bg-black hover:bg-black/90'} text-white hover:cursor-pointer ease-in duration-300`}>
        <p className='font-bold'>Confirmar Compra</p>
      </button>
      
    </div>
  )
}

export default DetalleCompra