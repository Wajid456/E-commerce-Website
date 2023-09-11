// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: JSON.parse(localStorage.getItem('cart')) || [],
  },
  reducers: {
    addItem: (state, action) => {
      // Add an item to the cart
      state.items.push(action.payload);
       // Save cart items to localStorage
       localStorage.setItem('cart', JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      // Remove an item from the cart
      state.items = state.items.filter(item => item.id !== action.payload.id);
           // Save cart items to localStorage
           localStorage.setItem('cart', JSON.stringify(state.items));
    },
    clearCart: (state) => {
      // Clear the entire cart
      state.items = [];
        // Clear cart items from localStorage
        localStorage.removeItem('cart');
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
