import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import TranslateComponent from "../../TranslateComponent/TranslateComponent";
import { selectName ,selectPassword} from "../../../Redux/userData-reducer";
import { selectUsers } from "./../../../Redux/users-reducer";
import { toggleIsLogged } from "../../../Redux/userSettings-reducer";

const LogInButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useSelector(selectName);
  const password = useSelector(selectPassword);
  const userList = useSelector(selectUsers).users;

  function logIn() {
    const logUser = userList.filter((user) => {
        return (
          user.username === name.trim() && user.password === password.trim()
        );
      });

      if (logUser.length !== 0) {
        navigate("/profile");
        dispatch(toggleIsLogged());
      }
  }

  return (
    <button onClick={logIn} type="button" className="btn btn-success">
      <TranslateComponent str="Log In" />
    </button>
  );
};

export default LogInButton;
