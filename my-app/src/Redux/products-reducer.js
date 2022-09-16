import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ALL, RANDOM_PRICE } from './../Utiles/consts';

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
    status: null,
    category:ALL,
    sortValue:RANDOM_PRICE
  },
  reducers: {
    changeCategory: (state, action) =>{
         return{ ...state,category:action.payload }
    },
    changeSortValue: (state, action) =>{
      return{ ...state,sortValue:action.payload }
 }
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

export const selectSortValue = (state)=>state.products.sortValue;
export const selectProducts = (state) => state.products.productsList;
export const selectProductsByCategory = (state) => state.products.category !== ALL  ? state.products.productsList.filter((product) => product.category === state.products.category) : state.products.productsList
export const selectProductById = (state, id) => state.products.productsList.find((product) => product.id === id);

export const { changeCategory ,changeSortValue } = ProductsSlice.actions;

export default ProductsSlice.reducer;