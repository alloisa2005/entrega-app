'use client'

import React, { useState } from 'react'
import { useSelector } from 'react-redux'


import CompraItem from './CompraItem'

const ComprasList = () => {

  const { compras, comprasTotalAmount } = useSelector(state => state.compras)

  const [selected, setSelected] = useState(null)
  const toggle = i => {

    if (selected === i) {
      return setSelected(null)
    }
    
    setSelected(i)
  }

  return (
    <>      
      {
        compras?.map((compra, index) => {
          return (
            <CompraItem key={compra._id} compra={compra} onClick={() => toggle(index)} selected={selected} index={index} />
          )
        })
      }
    </>
  )
}

export default ComprasList