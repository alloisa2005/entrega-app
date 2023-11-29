'use client'

import { separadorMiles } from '@/utils/separadorMiles';
import React, { useState } from 'react'
import { BsCartPlusFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { addToCartSlice } from '@/redux/slices/cartSlice';
import { useSession } from 'next-auth/react';
import MiModal from './MiModal';
import { addToCartAPI } from '@/utils/cart/cart';
import { useRouter } from 'next/navigation';

const AddToCart = ({ game }) => {
  const router = useRouter();
  const {data:session} = useSession()    

  const dispatch = useDispatch();  

  const [cantidad, setCantidad] = useState(1);
  const [modal, setModal] = useState({error: false, msg: ""}); 

  const incrementar = () => {
    setCantidad(cantidad + 1);
  }

  const decrementar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  }

  const handleAddToCart = async () => {    
    
    if(!session?.user) {
      setModal({error: true, msg: "Debes iniciar sesión para poder comprar."});
      return;
    }

    const res = await addToCartAPI(session?.user._id, game._id, game.precio,cantidad);
    if(res.error) {
      setModal({error: true, msg: res.error});
      return;
    } else{
      dispatch(addToCartSlice({cantidad, game}))
      setModal({error: false, msg: 'Producto añadido al carrito'});
      router.replace('/tienda/categorias/all');      
    }
  }

  return (
    <div className='w-full lg:w-[30%] border rounded-md shadow-md flex-col items-center justify-center overflow-hidden'>
      <p className='select-none text-center mb-2 text-black border-b-2 text-xl py-3'>Precio</p>
      
      <div className='select-none'>
        <p className='text-2xl font-bold mt-5 text-center'>$ {separadorMiles(game.precio)}</p>
      </div>

      <div className='select-none flex items-center justify-center mt-5 gap-7'>
        <div onClick={decrementar} className='h-9 w-9 flex items-center justify-center rounded-full bg-black text-white shadow-sm hover:scale-105 hover:shadow-lg hover:cursor-pointer ease-out duration-300 '>
          <p className='font-bold text-lg'>-</p>
        </div>
        <p className='text-3xl font-bold text-red-500'>{cantidad}</p>
        <div onClick={incrementar} className='h-9 w-9 flex items-center justify-center rounded-full bg-black text-white shadow-sm hover:scale-105 hover:shadow-lg hover:cursor-pointer ease-out duration-300 '>
          <p className='font-bold text-lg'>+</p>
        </div>
      </div> 

      {/* background: linear-gradient(90.06deg, #1E1E1E 0.05%, #122930 41.06%); */}
      <div onClick={handleAddToCart} className='select-none flex items-center justify-center gap-4 bg-black py-3 text-white mt-4 hover:bg-black/80 hover:cursor-pointer ease-out duration-300'>
        <BsCartPlusFill size={20} className='text-white' />
        <p>Añadir al carrito</p>
        
      </div>           

      {modal.msg && (
        <MiModal 
          error={modal.error}          
          mensaje={modal.msg}
          closeFn={() => setModal({ error: false, msg: ""})} 
        />
      )}

    </div>
  )
}

export default AddToCart
