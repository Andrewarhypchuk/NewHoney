import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import {
  changeLanguage,
  selectLanguage,
} from "../../../Redux/userSettings-reducer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import TranslateComponent from "./../../TranslateComponent/TranslateComponent";
import { UK } from "../../../Utiles/consts";
import { EN } from "./../../../Utiles/consts";

const LanguageSwitcher = () => {
  const language = useSelector(selectLanguage);
  const dispatch = useDispatch();
  return (
    <div className="d-flex flex-column-reverse">
      <Dropdown>
        <Dropdown.Toggle className="buttonLanguage" id="dropdown-basic">
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
      <div className="languageName">
        <TranslateComponent str="Change language" />
      </div>
    </div>
  );
};
export default LanguageSwitcher;
