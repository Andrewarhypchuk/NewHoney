import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import TranslateComponent from "../../TranslateComponent/TranslateComponent";
import { selectUserId } from "../../../Redux/userData-reducer";
import { capitalizeFirstLetter } from "./../../../Utiles/capitalizeFirstLetter";
import { selectUserById } from "../../../Redux/users-reducer";
import useCheckCartExistence from './../../../Utiles/hooks/useCheckCartExistence';

const User = () => {
  const userId = useSelector(selectUserId)
  const user = useSelector(state => selectUserById(state, userId))
  useCheckCartExistence()
  return (
    <div className="profileContainer">
      <TranslateComponent str='Profile' />
    <div className="profileView">
      <TranslateComponent str={`Name: ${user.username}`} />
      <div><TranslateComponent str='Password: ' />{user.password}</div>
      <div><TranslateComponent str='Email: ' />{user.email}</div>
      <div><TranslateComponent str='City : ' />{capitalizeFirstLetter(user.address.city)}</div>
      <div><TranslateComponent str='Street : ' />{capitalizeFirstLetter(user.address.street)}</div>
      <div><TranslateComponent str='Phone: ' />{user.phone}</div>
      <div className="d-flex">
      <NavLink to={"/products"}>
             <div className="button">
              <TranslateComponent str='To Products' />
             </div>
      </NavLink>
      <NavLink to={"/cart"}>
             <div className="button">
              <TranslateComponent str='To Cart' />
             </div>
      </NavLink>
      </div>
    </div>
    </div>
  );
};

export default User;
