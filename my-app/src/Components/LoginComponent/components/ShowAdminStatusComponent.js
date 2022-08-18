import React from "react";
import { useSelector } from "react-redux";
import { selectAdmin } from "../../../Redux/userSettings-reducer";
import TranslateComponent from "../../TranslateComponent/TranslateComponent";

const ShowAdminStatus = () => {
  const Admin = useSelector(selectAdmin);
  return (
    <div>
      <TranslateComponent str="Is admin" />: {Admin.toString()}
    </div>
  );
};
export default ShowAdminStatus;
