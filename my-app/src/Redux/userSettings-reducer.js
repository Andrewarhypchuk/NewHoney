import { createSlice } from "@reduxjs/toolkit";
import { EN, LIGHT } from "./../Utiles/consts";
export const UserSettingsSlice = createSlice({
  name: "userSettings",
  initialState: {
    isLogged: false,
    isAdmin: false,
    theme: LIGHT,
    language: EN,
  },
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload;
    },
    changeLanguage: (state, action) => {
      state.language = action.payload;
    },
    toggleAdmin: (state, action) => {
     state.isAdmin = !state.isAdmin;
    },
    changeAdmin: (state, action) => {
      state.isAdmin = action.payload;
     },
    toggleIsLogged: (state, action) => {
      state.isLogged = !state.isLogged;
    },
  },
});

export const selectTheme = (state) => state.userSettings.theme;
export const selectAdmin = (state) => state.userSettings.isAdmin;
export const selectLogged = (state) => state.userSettings.isLogged;
export const selectLanguage = (state) => state.userSettings.language;

export const { changeTheme, toggleAdmin,changeAdmin, changeLanguage, toggleIsLogged } =
  UserSettingsSlice.actions;
export default UserSettingsSlice.reducer;
