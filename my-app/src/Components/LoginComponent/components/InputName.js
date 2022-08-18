import React from "react";
import TranslateComponent from "../../TranslateComponent/TranslateComponent";
import { useSelector } from "react-redux";
import {
  selectName,
  setName,
  setPassword,
} from "../../../Redux/userData-reducer";
import { useDispatch } from "react-redux";

const InputName = () => {
  let name = useSelector(selectName);
  const dispatch = useDispatch();
  return (
    <>
      <label htmlFor="exampleFormControlInput1" className="form-label">
        <TranslateComponent str="Enter your nickname" />
        <input
          type="text"
          className="form-control fs-3"
          value={name}
          onChange={(e) => {
            dispatch(setName(e.target.value));
          }}
        />
      </label>
    </>
  );
};
export default InputName;
