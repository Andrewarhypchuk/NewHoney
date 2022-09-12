import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const setProducts = createAsyncThunk(
  "carts/setProducts",
  async (dispatch, getState) => {
    return await axios
      .get("https://fakestoreapi.com/products")
      .then((response) => response.data);
  }
);

export const ProductsSlice = createSlice({
  name: "products",
  initialState: {
    productsList: [],
    status: null
  },
  reducers: {

  },
  extraReducers: {
    [setProducts.pending]: (state, action) => {
      state.status = "loading";
    },
    [setProducts.fulfilled]: (state, action) => {
      state.status = "success";
      state.productsList = action.payload;
    },
    [setProducts.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const selectProducts = (state) => state.products.productsList;
export const selectProductsByCategory = (state, category) => category ? state.products.productsList.filter((product) => product.category === category) : state.products.productsList
export const selectProductById = (state, id) => state.products.productsList.find((product) => product.id === id);

export const { } = ProductsSlice.actions;

export default ProductsSlice.reducer;