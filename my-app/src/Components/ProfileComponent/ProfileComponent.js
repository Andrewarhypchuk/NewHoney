import React from "react";
import { useSelector } from "react-redux";

import Admin from "./components/AdminComponent";
import User from "./components/UserComponent";
import TranslateComponent from "./../TranslateComponent/TranslateComponent";
import { selectAdmin, selectLogged } from "./../../Redux/userSettings-reducer";

const Profile = () => {
  const isAdmin = useSelector(selectAdmin);
  const isLogged = useSelector(selectLogged);

  return isAdmin ? (
    <Admin />
  ) : isLogged ? (
    <User />
  ) : (
    <TranslateComponent str="Sorry , you are not logged" />
  );
};

export default Profile;
