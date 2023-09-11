import { configureStore } from '@reduxjs/toolkit';
import productFilterReducer from "./features/filters/filterSlice";
import cartReducer from "./features/cart/cartSlice"
 export const store = configureStore({
  reducer: {
    productFilter: productFilterReducer,
    cart: cartReducer
    // ... other reducers
  },
});


