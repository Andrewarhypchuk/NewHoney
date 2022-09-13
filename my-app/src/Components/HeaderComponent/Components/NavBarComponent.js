import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import TranslateComponent from "./../../TranslateComponent/TranslateComponent";
import { resetUserSettings, selectLogged,selectAdmin } from "../../../Redux/userSettings-reducer";
import { resetUserData } from "../../../Redux/userData-reducer";

const NavBarComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLogged = useSelector(selectLogged);
  const isAdmin = useSelector(selectAdmin);
  function logUserOut() {
    dispatch(resetUserSettings());
    dispatch(resetUserData());
    navigate("/login");
  }

  return (
    <div className="navbar_container ">
    <div className="d-flex align-items-center mr-10">
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
    </div>
    <>
          {isLogged ? (
            <button
            type="button"
            onClick={logUserOut}
            className="btn btn-danger"
          >
            <TranslateComponent str="Log Out" />
          </button>
      
      ) : (
        <NavLink to={"login"}>
          <TranslateComponent str="Log In" />
        </NavLink>
      )}</>
      </div>
  );
};

export default NavBarComponent;
