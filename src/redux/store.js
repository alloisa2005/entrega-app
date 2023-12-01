// create a redux toolkit store
import { configureStore } from '@reduxjs/toolkit';
import { favoritosSlice } from './slices/favoritosSlice';
import { pruebaSlice } from './slices/pruebaSlice';


// create the store
export const store = configureStore({
  reducer: {        
    favoritos: favoritosSlice.reducer,
    prueba: pruebaSlice.reducer,
  },
  devTools: true,
});



