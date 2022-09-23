import React from "react";
import { useSelector } from 'react-redux';
import { Outlet } from "react-router";

import NoAccess from "../NoAccessComponent/NoAccessComponent";
import {selectLogged } from '../../Redux/userSettings-reducer';

const ProtectedLogInRoute = () => {

    const isLogged = useSelector(selectLogged);
    return isLogged ? <Outlet /> : <NoAccess />
}

export default ProtectedLogInRoute;