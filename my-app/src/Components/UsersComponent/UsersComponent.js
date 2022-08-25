import React from "react";
import { useSelector } from "react-redux";
import TranslateComponent from "../TranslateComponent/TranslateComponent";
import { selectAdmin } from "./../../Redux/userSettings-reducer";

const Users = () => {
  let isAdmin = useSelector(selectAdmin);

  return isAdmin ? (
    <TranslateComponent str="Users" />
  ) : (
    <TranslateComponent str="You dont have access" />
  );
};

export default Users;
