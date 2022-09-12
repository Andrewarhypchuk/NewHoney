import React from "react";
import { NavLink } from "react-router-dom";

import TranslateComponent from "./../../TranslateComponent/TranslateComponent";
import { useSelector } from "react-redux";
import { selectLogged } from "../../../Redux/userSettings-reducer";
import { selectAdmin } from './../../../Redux/userSettings-reducer';

const NavBarComponent = () => {
  const isLogged = useSelector(selectLogged);
  const isAdmin = useSelector(selectAdmin);

  return (
    <div>
      <NavLink to={"profile"}>
        <TranslateComponent str="Profile" />
      </NavLink>
      {isAdmin && <NavLink to={"users"}>
        <TranslateComponent str="Users" />
      </NavLink>}
      <NavLink to={"products"}>
        <TranslateComponent str="Products" />
      </NavLink>
      <NavLink to={"cart"}>
        <TranslateComponent str="Cart" />
      </NavLink>
      {isLogged ? (
        <NavLink to={"logout"}>
          <TranslateComponent str="Log Out" />
        </NavLink>
      ) : (
        <NavLink to={"login"}>
          <TranslateComponent str="Log In" />
        </NavLink>
      )}
    </div>
  );
};

export default NavBarComponent;
