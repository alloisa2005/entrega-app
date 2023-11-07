import React from 'react'

const ProductDetail = ({ params }) => {

  const { productId } = params;

  return (
    <div>ProductDetail: { productId } </div>
  )
}

export default ProductDetail