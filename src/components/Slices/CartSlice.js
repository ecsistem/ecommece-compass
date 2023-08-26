import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
      items: [],
      totalAmount: 0,
    },
    reducers: {
      addToCart: (state, action) => {
        const newItem = action.payload;
        const existingItem = state.items.find(item => item.id === newItem.id);
  
        if (existingItem) {
          existingItem.amount += newItem.amount;
        } else {
          state.items.push(newItem);
        }
  
        state.totalAmount += newItem.price * newItem.amount;
      },
      removeFromCart: (state, action) => {
        const idToRemove = action.payload;
        const existingItem = state.items.find(item => item.id === idToRemove);
  
        if (existingItem.amount === 1) {
          state.items = state.items.filter(item => item.id !== idToRemove);
        } else {
          existingItem.amount--;
        }
  
        state.totalAmount -= existingItem.price;
      },
      removeAllById: (state, action) => {
        const idToRemove = action.payload;
        const itemsToRemove = state.items.filter(item => item.id === idToRemove);
  
        itemsToRemove.forEach(item => {
          state.totalAmount -= item.price * item.amount;
        });
  
        state.items = state.items.filter(item => item.id !== idToRemove);
      },
    },
  });
  
  export const { addToCart, removeFromCart, removeAllById } = cartSlice.actions;
  
  export default cartSlice.reducer;

 
  
  
  
  
  
  
  