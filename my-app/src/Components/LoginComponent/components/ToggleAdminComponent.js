import React from "react";
import TranslateComponent from "../../TranslateComponent/TranslateComponent";
import { useDispatch } from "react-redux";
import { toggleAdmin } from "../../../Redux/userSettings-reducer";

const ToggleAdminComponent = () => {
  const dispatch = useDispatch();
  return (
    <div className="form-check">
      <input
        onChange={() => dispatch(toggleAdmin())}
        className="form-check-input"
        type="checkbox"
        id="flexCheckDefault"
      />
      <label className="form-check-label" htmlFor="flexCheckDefault">
        <TranslateComponent str="I am admin" />
      </label>
    </div>
  );
};
export default ToggleAdminComponent;
