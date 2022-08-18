import React from "react";
import TranslateComponent from "../../TranslateComponent/TranslateComponent";
import { useSelector } from "react-redux";
import { setPassword } from "../../../Redux/userData-reducer";
import { useDispatch } from "react-redux";
import { selectPassword } from "./../../../Redux/userData-reducer";

const InputPassword = () => {
  let password = useSelector(selectPassword);
  const dispatch = useDispatch();
  return (
    <>
      <label htmlFor="exampleFormControlInput1" className="form-label">
        <TranslateComponent str="Enter your password" />
        <input
          type="password"
          className="form-control fs-3"
          value={password}
          onChange={(e) => dispatch(setPassword(e.target.value))}
        />
      </label>
    </>
  );
};
export default InputPassword;
