import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { CartItem, CartState } from "../../types/cartItems";
import { fetchCartAPI, addCartAPI, updateCartAPI } from "./cartAPI";

const initialState: CartState = {
  cartData: {
    id: 0,
    products: [],
    total: 0,
    discountedTotal: 0,
    userId: 0,
    totalProducts: 0,
    totalQuantity: 0,
  },
  status: "idle",
  error: null,
};

export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
  return await fetchCartAPI();
});

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (item: { id: number; quantity: number }) => {
    return await addCartAPI(item);
  }
);

export const updateCart = createAsyncThunk(
  "cart/updateCart",
  async (item: CartItem) => {
    return await updateCartAPI(item);
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cartData.products = state.cartData.products.filter(
        (i) => i.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log("action.payload", action.payload);
        state.cartData = action.payload;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Failed to load cart";
      })
      .addCase(updateCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cartData = action.payload;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cartData = action.payload;
      });
  },
});

export const { removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
