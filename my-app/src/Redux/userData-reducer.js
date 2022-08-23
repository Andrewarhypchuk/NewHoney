import { createSlice } from "@reduxjs/toolkit";

export const UserDataSlice = createSlice({
  name: "userData",
  initialState: {
    name: '',
    password: '',
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    resetUserData: (state, action) => {
      state.password = '';
      state.name = ''
    }
  },
});

export const selectName = (state) => state.userData.name;
export const selectPassword = (state) => state.userData.password;

export const { setName, setPassword, setFullName ,resetUserData } = UserDataSlice.actions;
export default UserDataSlice.reducer;
