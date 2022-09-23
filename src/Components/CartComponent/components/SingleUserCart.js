import React from "react";

import ProductsListComponent from "./ProductsListComponent";
import UserInformationView from "./UserInformationViewComponent";

const SingleUserCart = ({user}) => {
    
    return (
        <div className="cartContainer">
             <UserInformationView user={user} />
             <ProductsListComponent userId={user.id} />
        </div>
    )
}

export default SingleUserCart;
