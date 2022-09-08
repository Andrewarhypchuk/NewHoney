import React from "react";
import { selectUserById } from "../../../Redux/users-reducer";

import SingleUserCart from "./SingleUserCart";
import { useSelector } from 'react-redux';
import { selectUserId } from "../../../Redux/userData-reducer";

const SipmleUserCart = () => {
    const userId = useSelector(selectUserId)
    const currentUser = useSelector(state => selectUserById(state, userId))

    return (
        <SingleUserCart user={currentUser} />
    )
}
export default SipmleUserCart;