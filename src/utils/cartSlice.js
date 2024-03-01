import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    clearCart: (state) => {
      return [];
    },
  },
});
export const { addItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
