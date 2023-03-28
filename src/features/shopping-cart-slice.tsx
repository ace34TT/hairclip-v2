import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ShoppingCart } from "../schema/schopping-cart.schema";

// export interface CandidateState {
//   candidate?: Candidate;
// }

const initialState: ShoppingCart = {
  total: 0,
  quantity: 0,
  products: [],
};

export const shoppingCartSlice = createSlice({
  name: "shopping-cart",
  initialState,
  reducers: {
    addCartItem: (
      state,
      action: PayloadAction<{
        id: string;
        name: string;
        color: string;
        quantity: number;
      }>
    ) => {
      state.products.push({
        id: action.payload.id,
        name: action.payload.name,
        color: action.payload.color,
        quantity: action.payload.quantity,
      });
      state.quantity += action.payload.quantity;
    },
    updateItem: () => {},
    deleteItem: () => {},
    resetCart: () => {},
  },
});

// Action creators are generated for each case reducer function
export const { addCartItem } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
