import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ALL, RANDOM_PRICE } from './../Utiles/consts';

export const setProducts = createAsyncThunk(
  "products/setProducts",
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
    category: ALL,
    sortValue: RANDOM_PRICE,
    searchValue: ''
  },
  reducers: {
    changeCategory: (state, action) => {
      return { ...state, category: action.payload }
    },
    changeSortValue: (state, action) => {
      return { ...state, sortValue: action.payload }
    },
    changeSearchValue: (state, action) => {
      return { ...state, searchValue: action.payload }
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

export const selectSortValue = (state) => state.products.sortValue;
export const selectSearchValue = (state) => state.products.searchValue;
export const selectCategory = (state) => state.products.category;
export const selectProducts = (state) => state.products.productsList;
export const selectProductsByFilters = (state) => {
  const searchValue = state.products.searchValue;
  const category = state.products.category;

  if (searchValue === '' && category === ALL) {
    return state.products.productsList
  }
  if (searchValue !== '' && category === ALL) {
    return state.products.productsList.filter((product) => product.id == searchValue)
  }
  if (searchValue !== '' && category !== ALL) {
   return state.products.productsList
      .filter((product) => product.id == searchValue)
      .filter((product) => product.category == category)
  }
  if (searchValue === '' && category !== ALL) {
    return state.products.productsList.filter((product) => product.category == category)
  }

  return state.products.productsList
}
export const selectProductById = (state, id) => state.products.productsList.find((product) => product.id === id);
export const selectFilterProductsById = (state, id) => state.products.productsList.filter((product) => product.id === id);
export const { changeCategory, changeSortValue, changeSearchValue } = ProductsSlice.actions;

export default ProductsSlice.reducer;