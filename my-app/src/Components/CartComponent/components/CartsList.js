import React from "react";

import SingleUserCart from './SingleUserCart';
import { FilteredUsersByName } from './../../../Redux/users-reducer';
import SearchCartByUserName from "./SearchCartByUserName";

const CartsList = () => {
    const users = FilteredUsersByName();
    
    return (
        <div className="d-flex flex-column align-items-center">
            <SearchCartByUserName />
            <div>
                {users.map((user, index) => {

                    return <SingleUserCart key={index} user={user} />
                })}
            </div>

        </div>
    )
}

export default CartsList;