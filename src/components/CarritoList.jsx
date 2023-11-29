'use client';

import React from 'react'
import CarritoCard from './CarritoCard'
import { useSelector } from 'react-redux';

const CarritoList = () => {    
  
  const { cart } = useSelector(state => state.cart);  

  return (
    <>
      {cart?.map((prod, index) => (
        <CarritoCard key={index} prod={prod} />
      ))}
    </>
  )
}

export default CarritoList