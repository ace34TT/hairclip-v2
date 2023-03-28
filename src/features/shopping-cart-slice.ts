import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ShoppingCart } from "../schema/shopping-cart.schema";

// export interface CandidateState {
//   candidate?: Candidate;
// }
interface IProduct {
  id: string;
  name: string;
  color: string;
  quantity: number;
  preview: string;
}

const initialState: ShoppingCart = {
  total: 0,
  subTotal: 0,
  shipping: 0,
  quantity: 0,
  unitPrice: 7,
  products: [],
};

export const shoppingCartSlice = createSlice({
  name: "shopping-cart",
  initialState,
  reducers: {
    addCartItem: (state, action: PayloadAction<IProduct>) => {
      const index = state.products.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index === -1) {
        state.products.push({
          id: action.payload.id,
          name: action.payload.name,
          color: action.payload.color,
          quantity: action.payload.quantity,
          preview: action.payload.preview,
        });
      } else {
        const currentData = state.products[index];
        state.products[index] = {
          id: currentData.id,
          color: currentData.color,
          name: currentData.name,
          quantity: currentData.quantity + action.payload.quantity,
          preview: currentData.preview,
        };
      }
      state.quantity += action.payload.quantity;
      // updating price
      if (state.quantity < 3) {
        state.shipping = 1.99;
        state.unitPrice = 7;
      } else {
        state.shipping = 4.99;
        state.unitPrice = 5;
      }
      // updating sub-total
      state.subTotal = state.quantity * state.unitPrice;
      state.total = state.subTotal + state.shipping;
    },
    updateCartItem: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const index = state.products.findIndex(
        (item) => item.id === action.payload.id
      );
      const currentData = state.products[index];
      if (action.payload.quantity === -1 && currentData.quantity === 1) return;
      state.products[index] = {
        id: currentData.id,
        color: currentData.color,
        name: currentData.name,
        quantity: currentData.quantity + action.payload.quantity,
        preview: currentData.preview,
      };
      state.quantity += action.payload.quantity;
      //
      if (state.quantity < 3) {
        state.shipping = 1.99;
        state.unitPrice = 7;
      } else {
        state.shipping = 4.99;
        state.unitPrice = 5;
      }
      //
      state.subTotal = state.quantity * state.unitPrice;
      state.total = state.subTotal + state.shipping;
    },
    deleteItem: () => {},
    resetCart: () => {},
  },
});

// Action creators are generated for each case reducer function
export const { addCartItem, updateCartItem } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
