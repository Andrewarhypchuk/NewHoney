import React from "react";

import SingleUserCart from './SingleUserCart';
import {selectfilteredByNameUsers } from './../../../Redux/users-reducer';
import SearchCartByUserName from "./SearchCartByUserName";
import { useSelector } from 'react-redux';

const CartsList = () => {
    const users = useSelector(selectfilteredByNameUsers);
    
    return (
        <div className="d-flex flex-column align-items-center">
            <SearchCartByUserName />
            <div>
                {users.map((user, index) => {

                    return <SingleUserCart key={user.id} user={user} />
                })}
            </div>

        </div>
    )
}

export default CartsList;