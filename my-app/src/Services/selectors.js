import {configureStore} from "@reduxjs/toolkit";
import usersSettingReducer from "../Redux/usersSetting-reducer";

export const headerState = () => {
    const store = configureStore({reducer:usersSettingReducer})
    console.log(store.getState());
    return store.getState()
}