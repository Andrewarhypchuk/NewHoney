import React from "react";

import TranslateComponent from "../../TranslateComponent/TranslateComponent";
import ProductsListComponent from "./ProductsListComponent";

const SingleUserCart = ({ cart, user, productsList }) => {

    return (
        <div className="cartContainer">
            <div className="d-flex flex-column">
                <h2><TranslateComponent str='Personal information' /></h2>
                <div><TranslateComponent str='ID' />:  {user.id}</div>
                <div><TranslateComponent str='Email' />:  {user.email}</div>
                <div><TranslateComponent str='Name' />:  {user.name.firstname}   {user.name.lastname}</div>
                <div><TranslateComponent str='Password' />:  {user.password}</div>
                <div><TranslateComponent str='Location' />:  {user.address.city} , {user.address.street}</div>
                <div><TranslateComponent str='Phone' />:  {user.phone}</div>
            </div>
            <ProductsListComponent cart={cart} list={productsList} />
        </div>
    )
}

export default SingleUserCart;
