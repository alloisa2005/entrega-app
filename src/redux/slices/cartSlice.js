import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/cart/${usuarioEmail}`, {next:{revalidate:0}});
    const data = await response.json();    
    return data;
  }
);

export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async (cartItem) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/cart`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItem),
    });
    const data = await response.json();        
    return data;
  }
);

export const deleteProductFromCart = createAsyncThunk(
  'cart/deleteProductFromCart',
  async (cartItem) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/cart`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItem),
    });
    const data = await response.json();
    return data;
  }
);

export const clearCart = createAsyncThunk(
  'cart/clearCart',
  async (usuarioEmail) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/cart/${usuarioEmail}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
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
      });
      builder.addCase(getUserCart.fulfilled, (state, action) => {
        state.cartLoading = false;
        state.cart = action.payload.cart;
        state.cartTotalAmount = action.payload.cartTotalAmount;
        state.cartTotalItems = action.payload.cartTotalItems;
      });
      builder.addCase(getUserCart.rejected, (state, action) => {
        state.cartLoading = false;
        state.cartError = action.error.message;
      });
      builder.addCase(addToCart.pending, (state) => {
        state.cartLoading = true;
      });
      builder.addCase(addToCart.fulfilled, (state, action) => {
        state.cartLoading = false;
        state.cart = action.payload.productos;
        state.cartTotalAmount = action.payload.montoTotal;
        state.cartTotalItems = action.payload.cantidadProductos;
      });
      builder.addCase(addToCart.rejected, (state, action) => {
        state.cartLoading = false;
        state.cartError = action.error.message;
      });
      builder.addCase(deleteProductFromCart.pending, (state) => {
        state.cartLoading = true;
      });
      builder.addCase(deleteProductFromCart.fulfilled, (state, action) => {
        state.cartLoading = false;
        state.cart = action.payload.productos;
        state.cartTotalAmount = action.payload.montoTotal;
        state.cartTotalItems = action.payload.cantidadProductos;
      });
      builder.addCase(deleteProductFromCart.rejected, (state, action) => {
        state.cartLoading = false;
        state.cartError = action.error.message;
      });      
      builder.addCase(clearCart.pending, (state) => {
        state.cartLoading = true;
      });
      builder.addCase(clearCart.fulfilled, (state, action) => {
        state.cartLoading = false;
        state.cart = [];
        state.cartTotalAmount = 0;
        state.cartTotalItems = 0;
      });
      builder.addCase(clearCart.rejected, (state, action) => {
        state.cartLoading = false;
        state.cartError = action.error.message;
      });
  },
});