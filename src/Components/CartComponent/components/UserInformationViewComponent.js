import React from "react";

import TranslateComponent from "../../TranslateComponent/TranslateComponent";

const UserInformationView = ({user}) => {
    return (
        <div className="cartInformationContainer">
            <h2><TranslateComponent str='Personal information' /></h2>
            <div><TranslateComponent str='ID' />:  {user.id}</div>
            <div><TranslateComponent str='Email' />:  {user.email}</div>
            <div><TranslateComponent str='Name' />:  {user.username}</div>
            <div><TranslateComponent str='Password' />:  {user.password}</div>
            <div><TranslateComponent str='Location' />:  {user.address.city} , {user.address.street}</div>
            <div><TranslateComponent str='Phone' />:  {user.phone}</div>
        </div>
    )
}

export default UserInformationView;