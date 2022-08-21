import React from "react";
import { useSelector } from "react-redux";

import TranslateComponent from "../../TranslateComponent/TranslateComponent";
import { selectAdmin } from "../../../Redux/userSettings-reducer";

const ShowAdminStatus = () => {
  const adminUser = useSelector(selectAdmin);

  return (
    <div>
      <TranslateComponent str="Is admin" />: {adminUser.toString()}
    </div>
  );
};

export default ShowAdminStatus;
