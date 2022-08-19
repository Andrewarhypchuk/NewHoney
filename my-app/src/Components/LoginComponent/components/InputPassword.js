import React, { useState } from "react";
import { useDispatch } from "react-redux";

import TranslateComponent from "../../TranslateComponent/TranslateComponent";
import { setPassword } from "../../../Redux/userData-reducer";
const InputPassword = () => {
  const dispatch = useDispatch();

  const [localPassword, setLocalPassword] = useState("");

  const handleBlur = () => {
    dispatch(setPassword(localPassword));
  };
  const handleChange = (e) => {
    setLocalPassword(e.target.value);
  };

  return (
    <>
      <label htmlFor="exampleFormControlInput1" className="form-label">
        <TranslateComponent str="Enter your password" />
        <input
          type="password"
          className="form-control fs-3"
          value={localPassword}
          onChange={(e) => handleChange(e)}
          onBlur={handleBlur}
          onKeyPress={(event) => {
            event.key === "Enter" && handleBlur();
          }}
        />
      </label>
    </>
  );
};

export default InputPassword;
