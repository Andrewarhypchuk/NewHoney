import React from 'react';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import TranslateComponent from '../../TranslateComponent/TranslateComponent';
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetUserSettings, selectLogged } from '../../../Redux/userSettings-reducer';
import { resetUserData } from '../../../Redux/userData-reducer';
import { selectAdmin } from './../../../Redux/userSettings-reducer';
import LanguageSwitcher from './LanguageSwitcher';

const SideBar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLogged = useSelector(selectLogged);
  const isAdmin = useSelector(selectAdmin);
  function logUserOut() {
    dispatch(resetUserSettings());
    dispatch(resetUserData());
    navigate("/login");
  }
  return (
  <div className='sideBarContainer'>
    <DropdownButton autoClose="outside"
      as={ButtonGroup}
      title='Menu'
    >
      <Dropdown.Item >      <NavLink to={"profile"}>
        <TranslateComponent str="Profile" />
      </NavLink></Dropdown.Item>
      {isAdmin &&
        <Dropdown.Item ><NavLink to={"users"}>
          <TranslateComponent str="Users" />
        </NavLink></Dropdown.Item>
      }
      <Dropdown.Item >
        <NavLink to={"products"}>
          <TranslateComponent str="Products" />
        </NavLink>
      </Dropdown.Item>
      <Dropdown.Item >
        <NavLink to={"cart"}>
          <TranslateComponent str="Cart" />
        </NavLink>
      </Dropdown.Item>
      <Dropdown.Item >
        <LanguageSwitcher />
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item className='btn-danger' eventKey="4">    <>
        {isLogged ? (
          <button
            type="button"
            onClick={logUserOut}
            className="btn btn-danger"
          >
            <TranslateComponent str="Log Out" />
          </button>

        ) : (
          <NavLink to={"login"}>
            <TranslateComponent str="Log In" />
          </NavLink>
        )}</></Dropdown.Item>
    </DropdownButton>
    </div>
  );
};

export default SideBar;