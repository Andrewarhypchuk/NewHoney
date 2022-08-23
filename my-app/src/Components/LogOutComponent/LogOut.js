import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import TranslateComponent from "../TranslateComponent/TranslateComponent";
import { changeAdmin, toggleIsLogged } from "../../Redux/userSettings-reducer";
import { setName, setPassword } from "../../Redux/userData-reducer";

const LogOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function logUserOut() {
    dispatch(toggleIsLogged());
    dispatch(changeAdmin(false));
    dispatch(setName(""));
    dispatch(setPassword(""));
    navigate("/login");
  }

  return (
    <button
      type="button"
      onClick={logUserOut}
      className="btn btn-danger button"
    >
      <TranslateComponent str="Log Out" />
    </button>
  );
};
export default LogOut;
