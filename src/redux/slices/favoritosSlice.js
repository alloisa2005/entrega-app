import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  favoritos: [],
  favoritosLoading: false,
  favoritosError: "",
};

export const getFavoritosByUser = createAsyncThunk(
  "favoritos/getFavoritos",
  async (usuarioEmail) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/favoritos/${usuarioEmail}`);
    const data = await response.json();    
    return data;
  }
);

export const addToFavoritos = createAsyncThunk(
  "favoritos/addToFavoritos",
  async (favorito) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/favoritos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        usuarioEmail: favorito.usuarioEmail,
        productoId: favorito.productoId,
      }),
    });
    const data = await response.json();
    return data;
  }
);


export const favoritosSlice = createSlice({
  name: "favoritos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFavoritosByUser.pending, (state, action) => {
      state.favoritosLoading = true;
      state.favoritosError= "";
    });
    builder.addCase(getFavoritosByUser.fulfilled, (state, action) => {      
      state.favoritos = action.payload;
      state.favoritosLoading = false;
      state.favoritosError = "";
    });
    builder.addCase(getFavoritosByUser.rejected, (state, action) => {
      state.favoritos = [];
      state.favoritosLoading = false;
      state.favoritosError = action.payload;
    });
    builder.addCase(addToFavoritos.pending, (state, action) => {
      state.favoritosLoading = true;
      state.favoritosError = "";
    });
    builder.addCase(addToFavoritos.fulfilled, (state, action) => {      
      state.favoritos = action.payload;
      state.favoritosLoading = false;
      state.favoritosError = "";
    });
    builder.addCase(addToFavoritos.rejected, (state, action) => {
      state.favoritos = [];
      state.loading = false;
      state.favoritosError = action.payload;
    });    
  },
});



