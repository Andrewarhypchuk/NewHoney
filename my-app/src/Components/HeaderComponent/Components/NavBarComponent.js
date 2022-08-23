import React from "react";
import { NavLink } from "react-router-dom";

import TranslateComponent from "./../../TranslateComponent/TranslateComponent";
import { useSelector } from "react-redux";
import { selectLogged } from "../../../Redux/userSettings-reducer";

const NavBarComponent = () => {
  let isLogged = useSelector(selectLogged);

  return (
    <div>
      <NavLink to={"profile"}>
        <TranslateComponent str="Profile" />
      </NavLink>
      <NavLink to={"users"}>
        <TranslateComponent str="Users" />
      </NavLink>
      <NavLink to={"products"}>
        <TranslateComponent str="Products" />
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
