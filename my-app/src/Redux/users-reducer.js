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
    searchName: '',
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
    setSearchName: (state, action) => {
      state.searchName = action.payload
    }

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
export const selectUserById = (state, id) => state.users.users.find((user) => user.id === id);
export const selectUsersByName = (state) => state.users.searchName !== '' ? state.users.users.filter((user) => user.username == state.users.searchName) : state.users.users

export const { deleteUser, editUser, addUser, setSearchName } = UsersSlice.actions;

export default UsersSlice.reducer;
