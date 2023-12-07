import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  prueba: [],
  loading: false,
  error: "",
  cantidad: 0,
};

export const getPruebas = createAsyncThunk(
  "prueba/getPruebas",
  async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/prueba`);
    const data = await response.json();
    return data;
  }
);

export const addToPruebas = createAsyncThunk(    
  "prueba/addToPruebas",
  async (prueba) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/prueba`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name:prueba.nombre, age: prueba.edad }),
    });
    const data = await response.json();
    return data;
  }
);

export const pruebaSlice = createSlice({
  name: "prueba",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPruebas.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getPruebas.fulfilled, (state, action) => {
      state.prueba = action.payload;
      state.loading = false;
      state.cantidad = action.payload.length;
    });
    builder.addCase(getPruebas.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });    
    builder.addCase(addToPruebas.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addToPruebas.fulfilled, (state, action) => {
      state.prueba = action.payload;
      state.loading = false;
      state.cantidad = action.payload.length;
    });
    builder.addCase(addToPruebas.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });    
  },
});