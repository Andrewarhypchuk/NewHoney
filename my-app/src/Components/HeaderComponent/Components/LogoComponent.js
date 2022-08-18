import React from "react";
import TranslateComponent from "./../../TranslateComponent/TranslateComponent";
import { useSelector } from "react-redux";
import { selectName } from "../../../Redux/userData-reducer";
import { selectLogged } from "../../../Redux/userSettings-reducer";



const LogoComponent = () => {
  const name = useSelector(selectName);
  const isUserLogged = useSelector(selectLogged)
  return (
    <div className="d-flex flex-column">
      <div className="headerName">
        <TranslateComponent str="Store" />
      </div>
      <div className="userName">{isUserLogged ? name : null}</div>
    </div>
  );
};
export default LogoComponent;
