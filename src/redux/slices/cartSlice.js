import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
      state.total += action.payload.price;
    }    
  },
});

export const { addToCart } = cartSlice.actions;

export const selectCart = (state) => state.cart.cart;