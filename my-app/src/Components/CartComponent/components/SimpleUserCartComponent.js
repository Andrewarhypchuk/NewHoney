import React from "react";
import { GetUserById } from "../../../Redux/users-reducer";

import SingleUserCart from "./SingleUserCart";
import { useSelector } from 'react-redux';
import { selectUserId } from "../../../Redux/userData-reducer";

const SipmleUserCart = () => {
    const userId = useSelector(selectUserId)
    const currentUser = GetUserById(userId)

    return (
        <SingleUserCart user={ currentUser} />
    )
}
export default SipmleUserCart;