import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from 'react-redux';

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
      return {
        ...state, carts: [...state.carts.map((cart) => {
          if (cart.id === action.payload.id) {
            return action.payload;
          }
          return {
            ...cart,
            ...action.cart
          };
        })]
      }
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
export const selectCartByUserId = (id) => useSelector((state) => state.carts.carts.find((cart) => cart.userId === id));

export const { changeCart } = CartsSlice.actions;

export default CartsSlice.reducer;
