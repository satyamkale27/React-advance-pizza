import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  // cart: [
  //   {
  //     pizzaId: 12,
  //     name: "Mediterranean",
  //     quantity: 2,
  //     unitPrice: 16,
  //     totalprice: 32,
  //   },
  // ],
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
      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action); // if there is 0 quantity of that item in the cart then delete that item from cart //
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

//   here we are not mutating the state only geting it by appliying sonme criteria //

export const getCart = (state) => state.cart.cart; // we made getcart for reusibility purpose and if use have to make changes we can make directly here insted of changing in all files //

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0); // reduce method used only on array //  // redux reccomends to do this kind of data manipulation, right indide the selector function, and out outside the function // it is also good practice to do this in slice like here caerSlice //

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalprice, 0);

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;

// ***************************** more explanition ***************************************** //
/*
What .find() Does:
.find() will return the first item for which the condition item.pizzaId === id evaluates to true.
If no such item exists (i.e., if the condition is false for every item in the array), then .find() will return undefined.

The ?. is an optional chaining operator. It safely accesses the quantity property of the found item (if the item is undefined, it won’t throw an error).
The ?? is the nullish coalescing operator, which returns the right-hand side value (0) if the left-hand side (quantity) is null or undefined. In this case, if no item is found, it defaults the quantity to 0.

*/
