import { configureStore } from "@reduxjs/toolkit";
import userSettingsReducer from "./userSettings-reducer";
import usersReducer from "./users-reducer";
import userDataReducer from "./userData-reducer";

const store = configureStore({
  reducer: {
    userSettings: userSettingsReducer,
    userData:userDataReducer,
    users: usersReducer,
  },
});
export default store;
