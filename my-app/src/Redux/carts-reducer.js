import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const setCarts = createAsyncThunk(
  "carts/setCarts",
  async (dispatch, getState) => {
    return await axios
      .get("https://fakestoreapi.com/carts")
      .then((response) => response.data);
  }
);

export const CartsSlice = createSlice({
  name: "carts",
  initialState: {
    carts: [],
    status: null
  },
  reducers: {
    changeCart: (state, action) => {
      const newCartMassive = state.carts.map((cart) => {
        if (cart.id === action.payload.id) {
          cart = action.payload;
        }
        return cart;
      });
      state.carts = newCartMassive;
    }
  },
  extraReducers: {
    [setCarts.pending]: (state, action) => {
      state.status = "loading";
    },
    [setCarts.fulfilled]: (state, action) => {
      state.status = "success";
      state.carts = action.payload;
    },
    [setCarts.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const selectCarts = (state) => state.carts;

export const { changeCart } = CartsSlice.actions;

export default CartsSlice.reducer;
