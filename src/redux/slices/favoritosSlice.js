import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  favoritos: [],
  loading: false,
  error: "",
};

export const getFavoritosByUser = createAsyncThunk(
  "favoritos/getFavoritos",
  async (userId) => {
    const response = await fetch(`http://localhost:3000/api/v1/favoritos/${userId}`);
    const data = await response.json();
    return data;
  }
);

export const addToFavoritos = createAsyncThunk(
  "favoritos/addToFavoritos",
  async (favorito) => {
    const response = await fetch(`http://localhost:3000/api/v1/favoritos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: favorito.userId,
        juegoId: favorito.productoId,
      }),
    });
    const data = await response.json();
    return data;
  }
);

export const deleteFromFavoritos = createAsyncThunk(
  "favoritos/deleteFromFavoritos",
  async (favorito) => {
    const response = await fetch(`http://localhost:3000/api/v1/favoritos`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: favorito.userId,
        juegoId: favorito.productoId,
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
      state.loading = true;
      state.error = "";
    });
    builder.addCase(getFavoritosByUser.fulfilled, (state, action) => {
      state.favoritos = action.payload;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(getFavoritosByUser.rejected, (state, action) => {
      state.favoritos = [];
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(addToFavoritos.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(addToFavoritos.fulfilled, (state, action) => {
      state.favoritos = action.payload;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(addToFavoritos.rejected, (state, action) => {
      state.favoritos = [];
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(deleteFromFavoritos.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(deleteFromFavoritos.fulfilled, (state, action) => {
      state.favoritos = action.payload;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(deleteFromFavoritos.rejected, (state, action) => {
      state.favoritos = [];
      state.loading = false;
      state.error = action.payload;
    });
  },
});



