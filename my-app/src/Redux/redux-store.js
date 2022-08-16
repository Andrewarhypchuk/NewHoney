import { configureStore } from '@reduxjs/toolkit';
import userSettingsReducer from "./usersSetting-reducer";
import usersReducer from "./users-reducer";

const store = configureStore({
        reducer: {
                usersSetting:userSettingsReducer,
                users: usersReducer
        },
})

window.store = store;
export default store;