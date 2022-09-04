import { configureStore } from "@reduxjs/toolkit";
import userSettingsReducer from "./userSettings-reducer";
import usersReducer from "./users-reducer";
import userDataReducer from "./userData-reducer";
import cartsReducer from "./carts-reducer";
import productsReducer from "./products-reducer";

const store = configureStore({
  reducer: {
    userSettings: userSettingsReducer,
    userData:userDataReducer,
    users: usersReducer,
    carts:cartsReducer,
    products:productsReducer
  },
});
export default store;
