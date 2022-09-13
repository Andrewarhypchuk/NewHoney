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
const initialState = {
  carts: [],
  status: null
}

export const CartsSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    increaseProductQuantity: (state, action) => {
      return {
        ...state, carts: state.carts.map((cart) => {
          if (cart.id === action.payload.cartId) {
            return {
              ...cart, products: cart.products.map((product) => {
                return product.productId === action.payload.productId ? {...product,quantity:product.quantity + 1 } : product
              })
            }
          }
          return cart ;
        })
      }
    },
    decreaseProductQuantity: (state, action) => {
      return {
        ...state, carts:state.carts.map((cart) => {
          if (cart.id === action.payload.cartId) {
            return {
              ...cart, products: [...cart.products.map((product) => {
                return product.productId === action.payload.productId ? {...product,quantity:product.quantity - 1 } : product
              })]
            }
          }
          return  cart
        })
      }
    },
    deleteСartProduct: (state, action) => {
      
      return {
        ...state, carts:state.carts.map((cart) => {
          if (cart.id === action.payload.cartId) {
            return { ...cart, products: [...cart.products.filter((product) => product.productId !== action.payload.productId)] }
          }
          return cart
        })
      }
    },
    addCartProduct:(state,action)=>{

   return {
      ...state,carts:state.carts.map((cart)=>{
        if (cart.id === action.payload.cartId) {
          return {
            ...cart, products: [...cart.products,action.payload.product]
          }
        }
        return cart
      }
         
      )
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
export const selectCartByUserId = (state,id) => state.carts.carts.find((cart) => cart.userId === id);
export const {increaseProductQuantity,decreaseProductQuantity,deleteСartProduct,addCartProduct } = CartsSlice.actions;

export default CartsSlice.reducer;
