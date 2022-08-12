import React from "react";
import {NavLink} from "react-router-dom";

const NavBarComponent = (props) =>{
    return(
        <div>
            <NavLink to={'profile'}>{props.profile}</NavLink>
            <NavLink to={'users'}>{props.users}</NavLink>
            <NavLink to={'products'}>{props.products}</NavLink>
            <NavLink to={'login'}>{props.login}</NavLink>
        </div>
    )
}
export default NavBarComponent