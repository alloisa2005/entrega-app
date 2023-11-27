// create a redux toolkit store
import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './slices/cartSlice';
import { favoritosSlice } from './slices/favoritosSlice';


// create the store
export const store = configureStore({
  reducer: {    
    cart: cartSlice.reducer,
    favoritos: favoritosSlice.reducer,
  },
});



