import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setUsers } from "../../Redux/users-reducer";
import { setProducts } from './../../Redux/products-reducer';
import { setCarts } from './../../Redux/carts-reducer';
import LogInForm from "./components/LogInForm";

const LoginComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUsers());
    dispatch(setCarts());
    dispatch(setProducts());
  });

  return (
    <div className="d-flex flex-column align-items-center">
      <LogInForm />
    </div>
  );
};

export default LoginComponent;
