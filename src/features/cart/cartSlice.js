import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //   cart: [],
  cart: [
    {
      pizzaId: 12,
      name: "Mediterranean",
      quantity: 2,
      unitPrice: 16,
      totalprice: 32,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload); // we used .push because use want to push in array, the payload recived //
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantaty(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++; // in redux we dont have to use ...(spread)operator to mutate any quantity or element in state, we can directly mutate it//
      item.totalprice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantaty(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--; // in redux we dont have to use ...(spread)operator to mutate any quantity or element in state, we can directly mutate it//
      item.totalprice = item.quantity * item.unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantaty,
  decreaseItemQuantaty,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
