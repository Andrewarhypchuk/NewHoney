import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";


import LoginComponent from "../LoginComponent/LoginComponent";
import ProfileComponent from './../ProfileComponent/ProfileComponent';
import { selectTheme } from "../../Redux/userSettings-reducer";
import LogOut from "../LogOutComponent/LogOut";
import Users from "../UsersComponent/UsersComponent";
import TranslateComponent from './../TranslateComponent/TranslateComponent';
import ProtectedAdminRoute from "../ProtectedRoutes/ProtectedAdminRoute";
import ProtectedLogInRoute from './../ProtectedRoutes/ProtectedLogInRoute';
import MainCartComponent from "../CartComponent/MainCartComponent";
import ProductsContainerComponent from './../ProductsComponent/ProductsContainerComponent';


const Main = () => {
  const theme = useSelector(selectTheme);
  return (
    <div className={`${theme}main d-flex justify-content-center align-items-start`}>
      <Routes>
        <Route path="/" element={<LoginComponent />} />
        <Route path="/profile" element={<ProfileComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/products" element={<ProductsContainerComponent />} />
        <Route element={<ProtectedAdminRoute />} >
          <Route path="/users" element={<Users />} />
        </Route>
        <Route element={<ProtectedLogInRoute />} >
          <Route path="/cart" element={<MainCartComponent />} />
        </Route>
        <Route path="/logout" element={<LogOut />} />
        <Route path="*" element={<TranslateComponent str='Page does not exist' />} />
      </Routes>
    </div>
  );
};
export default Main;
