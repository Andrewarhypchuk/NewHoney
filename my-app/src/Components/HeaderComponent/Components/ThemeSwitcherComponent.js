import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeTheme, selectTheme } from "../../../Redux/userSettings-reducer";
import TranslateComponent from "./../../TranslateComponent/TranslateComponent";
import { DARK, LIGHT } from "./../../../Utiles/consts";
const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  function changeCurrentTheme() {
    if (theme === LIGHT) {
      dispatch(changeTheme(DARK));
    } else {
      dispatch(changeTheme(LIGHT));
    }
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
        <TranslateComponent str={theme} />
      </label>
    </div>
  );
};
export default ThemeSwitcher;
