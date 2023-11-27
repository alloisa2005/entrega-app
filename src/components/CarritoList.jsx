'use client'

import React from 'react'
import { useSelector } from 'react-redux'
import CarritoCard from './CarritoCard'

const CarritoList = () => {

  const { cart } = useSelector(state => state.cart)
  console.log(cart.productos);

  return (
    <>
      {cart.productos?.map((prod, index) => (
        <CarritoCard key={index} prod={prod} />
      ))}
    </>
  )
}

export default CarritoList