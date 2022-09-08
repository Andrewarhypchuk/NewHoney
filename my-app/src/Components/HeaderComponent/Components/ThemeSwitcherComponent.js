import React from "react";
import { useSelector, useDispatch } from "react-redux";

import TranslateComponent from "./../../TranslateComponent/TranslateComponent";
import { changeTheme, selectTheme } from "../../../Redux/userSettings-reducer";
import { DARK, LIGHT } from "./../../../Utiles/consts";
const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  function changeCurrentTheme() {
    const newTheme = theme === LIGHT ? DARK : LIGHT;
    dispatch(changeTheme(newTheme));
  }

  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        onClick={changeCurrentTheme}
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
      />
      <label
        className="form-check-label themeName"
        htmlFor="flexSwitchCheckDefault"
      >
      </label>
    </div>
  );
};

export default ThemeSwitcher;
