import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import ShowAdminStatus from "./components/ShowAdminStatusComponent";
import LogInButton from './components/LogInButtonComponent';
import ToggleAdminComponent from "./components/ToggleAdminComponent";
import InputName from "./components/InputName";
import InputPassword from "./components/InputPassword";
import { setUsers } from "../../Redux/users-reducer";

const LoginComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUsers());
  });

  return (
    <div className="d-flex flex-column align-items-center">
      <InputName />
      <InputPassword />
      <ToggleAdminComponent />
      <LogInButton />
    </div>
  );
};

export default LoginComponent;
