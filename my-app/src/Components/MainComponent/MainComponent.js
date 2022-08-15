import React from "react";
import {Route, Routes} from "react-router-dom";
import ProfileComponent from "../ProfileComponent/ProfileComponent";
import {useSelector} from "react-redux";
import LoginComponent from "../LoginComponent/LoginComponent";
import UserComponent from "../ProfileComponent/components/UserComponent";
import Users from "../UsersComponent/UsersComponent";


const Main = ()=>{
    const userSettingsTheme = useSelector((state)=> state.usersSetting.value.theme);
    return(
        <div className={`${userSettingsTheme}main`} >
        <Routes>
            <Route path="/" element={<LoginComponent />} />
            <Route path="/profile" element={<ProfileComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/users" element={<Users />} />
            <Route path="/products" element={<div>Products</div>} />
            <Route path="*" element={<div>Page does not exist</div>} />
        </Routes>
        </div>
    )
}
export default Main;

