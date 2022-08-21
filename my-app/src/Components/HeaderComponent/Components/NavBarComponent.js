import React from "react";
import {NavLink} from "react-router-dom";

import TranslateComponent from './../../TranslateComponent/TranslateComponent';

const NavBarComponent = () =>{
    
    return(
        <div>
            <NavLink to={'profile'}><TranslateComponent str='Profile'/></NavLink>
            <NavLink to={'users'}><TranslateComponent str='Users'/></NavLink>
            <NavLink to={'products'}><TranslateComponent str='Products'/></NavLink>
            <NavLink to={'login'}><TranslateComponent str='Log In'/></NavLink>
        </div>
    )
}

export default NavBarComponent;