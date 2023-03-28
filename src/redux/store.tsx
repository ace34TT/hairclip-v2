import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../features/counter/counterSlice";
// import stepReducer from "./../features/registration-step/registrationStepSlice";
// import registrationItemReducer from "../features/registration-step/registrationItemSlice";
// import candidateInfoReducer from "../features/candidate-sheet/candidateSheetSlice";
import ShoppingCartReducer from "../features/shopping-cart-slice";
export const store = configureStore({
  reducer: {
    shoppingCart: ShoppingCartReducer,
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
