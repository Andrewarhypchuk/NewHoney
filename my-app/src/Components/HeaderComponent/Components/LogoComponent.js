import React from "react";
import { useSelector } from "react-redux";

import { selectName } from "../../../Redux/userData-reducer";
import { selectLogged } from "../../../Redux/userSettings-reducer";
import { capitalizeFirstLetter } from "./../../../Utiles/capitalizeFirstLetter";

const LogoComponent = () => {
  const name = useSelector(selectName);
  const isUserLogged = useSelector(selectLogged);

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="logoPicture"></div>
      <div className="userName">
        {isUserLogged ? capitalizeFirstLetter(name) : null}
      </div>
    </div>
  );
};

export default LogoComponent;
