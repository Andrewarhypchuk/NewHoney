import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUsers } from "../../Redux/users-reducer";
import ShowAdminStatus from "./components/ShowAdminStatusComponent";
import LogInButton from './components/LogInButtonComponent';
import ToggleAdminComponent from "./components/ToggleAdminComponent";
import InputName from "./components/InputName";
import InputPassword from "./components/InputPassword";

const LoginComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUsers());
  });

  return (
    <div className="d-flex flex-column align-items-center">
      <ShowAdminStatus />
      <InputName />
      <InputPassword />
      <ToggleAdminComponent />
      <LogInButton />
    </div>
  );
};
export default LoginComponent;
