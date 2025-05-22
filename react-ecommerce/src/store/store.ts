import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

import cartReducer from "../features/cart/cartSlice";
import productListReducer from "../features/productlist/productListSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    productlist: productListReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
