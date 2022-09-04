import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const setUsers = createAsyncThunk(
  "users/setUsers",
  async (dispatch, getState) => {
    return await axios
      .get("https://fakestoreapi.com/users")
      .then((response) => response.data);
  }
);

export const UsersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    status: null
  },
  reducers: {
    editUser: (state, action) => {
      let newUsersMassive = state.users.map((user) => {
        if (user.id === action.payload.id) {
          user = action.payload;
        }
        return user;
      });
      state.users = newUsersMassive;
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    addUser: (state, action) => {
       state.users.unshift(action.payload)
    },
  },
  extraReducers: {
    [setUsers.pending]: (state, action) => {
      state.status = "loading";
    },
    [setUsers.fulfilled]: (state, action) => {
      state.status = "success";
      state.users = action.payload;
    },
    [setUsers.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const selectUsers = (state) => state.users;

export const { deleteUser, editUser, addUser } = UsersSlice.actions;

export default UsersSlice.reducer;
