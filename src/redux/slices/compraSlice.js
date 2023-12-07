import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  compras: [],
  comprasLoading: false,
  comprasError: '',
  comprasTotalAmount: 0,    
};

export const getUserCompras = createAsyncThunk(
  'compras/getUserCompras',
  async (usuarioEmail) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/compras/${usuarioEmail}`, {next:{revalidate:0}});
    const data = await response.json();    
    return data;
  }
);

export const compraSlice = createSlice({
  name: 'compras',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUserCompras.pending, (state) => {
        state.comprasLoading = true;
      })
      .addCase(getUserCompras.fulfilled, (state, action) => {        
        state.comprasLoading = false;
        state.compras = action.payload;
        state.comprasTotalAmount = action.payload.reduce((total, item) => total + item.montoTotal, 0);
      })
      .addCase(getUserCompras.rejected, (state, action) => {
        state.comprasLoading = false;
        state.comprasError = action.error.message;
      });      
  },
});