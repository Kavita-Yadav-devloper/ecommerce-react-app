import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/product/prodcutSlice' ;
export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
