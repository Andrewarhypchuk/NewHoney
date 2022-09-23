import { createSlice } from "@reduxjs/toolkit";

export const UserDataSlice = createSlice({
  name: "userData",
  initialState: {
    id:'',
    name: ''
  },
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    resetUserData: (state, action) => {
      state.id = '';
      state.name = ''
    }
  },
});

export const selectName = (state) => state.userData.name;
export const selectPassword = (state) => state.userData.password;
export const selectUserId = (state) => state.userData.id;

export const { setName,setId, setFullName ,resetUserData } = UserDataSlice.actions;
export default UserDataSlice.reducer;
