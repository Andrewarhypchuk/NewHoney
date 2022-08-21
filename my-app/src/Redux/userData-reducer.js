import { createSlice } from "@reduxjs/toolkit";

export const UserDataSlice = createSlice({
  name: "userData",
  initialState: {
    name: '',
    fullName: '',
    password: '',
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setFullName: (state, action) => {
      state.fullName = action.payload;
    },
  },
});

export const selectName = (state) => state.userData.name;
export const selectPassword = (state) => state.userData.password;

export const { setName, setPassword, setFullName } = UserDataSlice.actions;
export default UserDataSlice.reducer;
