import React from "react";
import { useSelector } from 'react-redux';

import SingleUserCart from './SingleUserCart';
import { selectUsers } from '../../../Redux/users-reducer';

const CartsList = () => {
    const users = useSelector(selectUsers);
    
    return (
        <div className="d-flex flex-column">
            {users.users.map((user,index) => {
                
                return <SingleUserCart key={index} user={user} />
            })}
        </div>
     )
}
export default CartsList;