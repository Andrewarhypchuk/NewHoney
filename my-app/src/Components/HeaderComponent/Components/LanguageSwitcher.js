import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Dropdown from "react-bootstrap/Dropdown";
import TranslateComponent from "./../../TranslateComponent/TranslateComponent";
import {
  changeLanguage,
  selectLanguage,
} from "../../../Redux/userSettings-reducer";
import { UK, EN } from "../../../Utiles/consts";

const LanguageSwitcher = () => {
  const dispatch = useDispatch();
  const language = useSelector(selectLanguage);
  
  return (
    <div className="language_container">
      <Dropdown>
        <Dropdown.Toggle className="buttonLanguage languageButton" id="dropdown-basic">
          <TranslateComponent str={language} />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => dispatch(changeLanguage(UK))}
            href="#/action-1"
          >
            <TranslateComponent str={UK} />
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => dispatch(changeLanguage(EN))}
            href="#/action-2"
          >
            <TranslateComponent str={EN} />
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default LanguageSwitcher;
