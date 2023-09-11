import { createSlice } from '@reduxjs/toolkit';

const productFilterSlice = createSlice({
  name: 'productFilter',
  initialState: {
    selectedCategory: 'All',
    priceRange:{min:0,max:1000},
  },

  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setPriceRange:(state,action)=>{
      state.priceRange = action.payload;
    }
  },
});

export const { setCategory,setPriceRange } = productFilterSlice.actions;
export default productFilterSlice.reducer;
