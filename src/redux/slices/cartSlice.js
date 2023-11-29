import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: "",
  cart: [],
  total: 0,
  cantidadProductos: 0,
};

export const getUserCart = createAsyncThunk(
  "cart/getUserCart",
  async (userId) => {
    const response = await fetch(`/api/cart/${userId}`);
    const data = await response.json();   
    return data;
  }
);

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (cart) => {
    const response = await fetch(`/api/cart/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        usuarioId: cart.usuarioId,
        productoId: cart.productoId,
        precio: cart.precio,
        cantidad: cart.cantidad,
      }),
    });
    const data = await response.json();
    return data;
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getUserCart.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(getUserCart.fulfilled, (state, action) => {
      state.cart = action.payload;
      state.loading = false;
      state.error = "";
      state.cantidadProductos = action.payload.cantidadProductos;
    });
    builder.addCase(getUserCart.rejected, (state, action) => {
      state.cart = [];
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(addToCart.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {      
      state.cart = action.payload;
      state.loading = false;
      state.error = "";
      state.cantidadProductos = action.payload.cantidadProductos;
    });
    builder.addCase(addToCart.rejected, (state, action) => {
      state.cart = [];
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const selectCart = (state) => state.cart.cart;
