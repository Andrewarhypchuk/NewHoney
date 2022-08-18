import React from "react";
import TranslateComponent from "../../TranslateComponent/TranslateComponent";
import { useSelector } from "react-redux";
import { selectName } from "../../../Redux/userData-reducer";
import { selectPassword } from "./../../../Redux/userData-reducer";
import { selectUsers } from "./../../../Redux/users-reducer";
import { useDispatch } from "react-redux";
import { toggleIsLogged } from "../../../Redux/userSettings-reducer";
import { useNavigate } from "react-router-dom";

const LogInButton = () => {
  let navigate = useNavigate();
  let name = useSelector(selectName);
  let password = useSelector(selectPassword);
  let userList = useSelector(selectUsers).users;
  let dispatch = useDispatch();
  
  function logIn() {
    let LogUser = userList.filter((user) => {
      return user.username === name.trim() && user.password === password.trim();
    });
    if (LogUser.length !== 0) {
      navigate('/profile')
      dispatch(toggleIsLogged());
    }
  }

  return (
    <button onClick={() => logIn()} type="button" className="btn btn-success">
      <TranslateComponent str="Log In" />
    </button>
  );
};
export default LogInButton;
