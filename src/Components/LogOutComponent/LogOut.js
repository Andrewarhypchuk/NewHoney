import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import TranslateComponent from "../TranslateComponent/TranslateComponent";
import { resetUserSettings } from "../../Redux/userSettings-reducer";
import { resetUserData } from "../../Redux/userData-reducer";

const LogOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function logUserOut() {
    dispatch(resetUserSettings());
    dispatch(resetUserData());
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
