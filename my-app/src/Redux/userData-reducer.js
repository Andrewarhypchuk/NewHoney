import { createSlice } from "@reduxjs/toolkit";

export const UserDataSlice = createSlice({
  name: "userData",
  initialState: {
    id:'',
    name: '',
    password: '',
  },
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    resetUserData: (state, action) => {
      state.id = '';
      state.password = '';
      state.name = ''
    }
  },
});

export const selectName = (state) => state.userData.name;
export const selectPassword = (state) => state.userData.password;
export const selectId = (state) => state.userData.id;

export const { setName, setPassword,setId, setFullName ,resetUserData } = UserDataSlice.actions;
export default UserDataSlice.reducer;
