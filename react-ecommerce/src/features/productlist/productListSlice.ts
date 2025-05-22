import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { ProductState } from "../../types/product";
import { fetchProductsAPI } from "./productListAPI";

const initialState: ProductState = {
  productData: {
    products: [],
    total: 0,
    skip: 0,
    limit: 30,
  },
  status: "idle",
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "productlist/fetchProducts",
  async () => {
    return await fetchProductsAPI();
  }
);

const productListSlice = createSlice({
  name: "productlist",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.productData = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Failed to load productList";
      });
  },
});

export default productListSlice.reducer;
