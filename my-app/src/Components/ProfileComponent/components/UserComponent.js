import React from "react";
import { useSelector } from "react-redux";

import TranslateComponent from "../../TranslateComponent/TranslateComponent";
import { selectName } from "../../../Redux/userData-reducer";
import { capitalizeFirstLetter } from "./../../../Utiles/capitalizeFirstLetter";

const User = () => {
  const name = capitalizeFirstLetter(useSelector(selectName));

  return (
    <div className="d-flex flex-column align-items-center">
      <div>
        <TranslateComponent str={`Name: ${name}`} />
      </div>
      <div>
        <TranslateComponent str="You have no access to other users" />{" "}
      </div>
    </div>
  );
};

export default User;
