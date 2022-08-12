import React from "react";
import {Route, Routes} from "react-router-dom";
import ProfileComponent from "../ProfileComponent/ProfileComponent";
import {useSelector} from "react-redux";
import LoginComponent from "../LoginComponent/LoginComponent";
import UserComponent from "../ProfileComponent/components/UserComponent";


const Main = ()=>{
    const userSettings = useSelector((state)=> state.usersSetting.value);
    return(
        <div className={`${userSettings.theme}main`} >
        <Routes>
            <Route path="/" element={<LoginComponent />} />
            <Route path="/profile" element={<ProfileComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/users" element={<div>Users</div>} />
            <Route path="/products" element={<div>Products</div>} />
            <Route path="*" element={<div>Page does not exist</div>} />
        </Routes>
        </div>
    )
}
export default Main;

