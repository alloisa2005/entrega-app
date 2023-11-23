// create a redux toolkit store
import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './slices/cartSlice';


// create the store
export const store = configureStore({
  reducer: {
    // here we will be adding reducers
    cart: cartSlice.reducer,
  },
});



