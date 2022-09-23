import React from "react";
import { useSelector, useDispatch } from "react-redux";

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
     <div className="themeIcon"  onClick={changeCurrentTheme}></div>
  );
};

export default ThemeSwitcher;
