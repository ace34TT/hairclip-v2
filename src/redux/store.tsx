import { configureStore } from "@reduxjs/toolkit";

import ShoppingCartReducer from "../features/shopping-cart-slice";
import ShippingInformationReducer from "./../features/shipping-information";
export const store = configureStore({
  reducer: {
    shoppingCart: ShoppingCartReducer,
    shippingInformation: ShippingInformationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
