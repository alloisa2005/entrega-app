import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  cartLoading: false,
  cartError: '',  
  cartTotalAmount: 0,  
  cartTotalItems: 0,
};

export const getUserCart = createAsyncThunk(
  'cart/getUserCart',
  async (usuarioEmail) => {
    const response = await fetch(`http://localhost:3000/api/cart/${usuarioEmail}`, {next:{revalidate:0}});
    const data = await response.json();
    return data;
  }
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUserCart.pending, (state) => {
        state.cartLoading = true;
      })
      .addCase(getUserCart.fulfilled, (state, action) => {
        state.cartLoading = false;
        state.cart = action.payload.cart;
        state.cartTotalAmount = action.payload.cartTotalAmount;
        state.cartTotalItems = action.payload.cartTotalItems;
      })
      .addCase(getUserCart.rejected, (state, action) => {
        state.cartLoading = false;
        state.cartError = action.error.message;
      });
  },
});