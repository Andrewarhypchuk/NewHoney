import React from "react";
import { useSelector } from 'react-redux';
import { Outlet } from "react-router";

import NoAccess from "../NoAccessComponent/NoAccessComponent";
import { selectAdmin } from '../../Redux/userSettings-reducer';

const ProtectedAdminRoute = () => {

    const isAdmin = useSelector(selectAdmin);
    return isAdmin ? <Outlet /> : <NoAccess />
}

export default ProtectedAdminRoute;