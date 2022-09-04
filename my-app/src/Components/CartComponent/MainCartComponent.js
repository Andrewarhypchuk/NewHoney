import React from "react";
import { useSelector } from 'react-redux';

import { selectAdmin } from './../../Redux/userSettings-reducer';
import CartList from './components/CartsList';
import SipmleUserCart from "./components/SimpleUserCartComponent";

const MainCartComponent = () => {
    const isAdmin = useSelector(selectAdmin);

    if (isAdmin) return <CartList />
    return <SipmleUserCart />
}

export default MainCartComponent;
