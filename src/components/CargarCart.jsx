'use client';

import { getUserCart } from '@/redux/slices/cartSlice';
import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

const CargarCart = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();

  useEffect(() => {
    if (session?.user?._id) {
      dispatch(getUserCart(session.user._id));
    }
  }, [dispatch, session]);

  return (
    <div></div>
  )
}

export default CargarCart