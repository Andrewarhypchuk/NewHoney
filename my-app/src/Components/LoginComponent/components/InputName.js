import React, { useState } from "react";
import { useDispatch} from "react-redux";

import TranslateComponent from "../../TranslateComponent/TranslateComponent";
import {setName } from "../../../Redux/userData-reducer";

const InputName = () => {
  const dispatch = useDispatch();

  const [localName, setLocalName] = useState("");
  const handleBlur = () => {
    dispatch(setName(localName));
  };
  const handleChange = (e) => {
    setLocalName(e.target.value);
  };

  return (
    <>
      <label htmlFor="exampleFormControlInput1" className="form-label">
        <TranslateComponent str="Enter your nickname" />
        <input
          type="text"
          className="form-control fs-3"
          value={localName}
          onBlur={handleBlur}
          onChange={(e) => handleChange(e)}
          onKeyPress={event => {
            event.key === 'Enter' && handleBlur();
        }}
        />
      </label>
    </>
  );
};

export default InputName;
