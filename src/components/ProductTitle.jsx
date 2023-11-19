'use client'

import React from 'react'
import { motion } from 'framer-motion'

const ProductTitle = ({ titulo }) => {
  return (
    <motion.p 
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.3 }}
      exit={{ opacity: 0, x: -200 }}            
      className='text-3xl lg:text-5xl font-bold italic'>
        {titulo}
    </motion.p>
  )
}

export default ProductTitle