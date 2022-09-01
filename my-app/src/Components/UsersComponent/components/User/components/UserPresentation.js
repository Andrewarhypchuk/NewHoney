import React from "react";

import TranslateComponent from './../../../../TranslateComponent/TranslateComponent';

const UserPresentation = ({user}) => {

  return(
    <div className="d-flex flex-column">
         <div><TranslateComponent str="ID:" />{user.id}</div>
         <div><TranslateComponent str="Name:" />{user.username}</div>
         <div><TranslateComponent str="Password:" />{user.password}</div>
         <div><TranslateComponent str="City:" />{user.address.city}</div>
         <div><TranslateComponent str="Street:" />{user.address.street}</div>
         <div><TranslateComponent str="Email:" />{user.email}</div>
         <div><TranslateComponent str="Phone:" />{user.phone}</div>
    </div>
  )
};

export default UserPresentation;