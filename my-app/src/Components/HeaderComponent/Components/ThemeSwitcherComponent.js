import React from "react";

const ThemeSwitcher = (props) =>{
    return(
        <div className="form-check form-switch">
            <input className="form-check-input" onClick={props.changeTheme} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label themeName" htmlFor="flexSwitchCheckDefault">{props.theme}</label>
        </div>
    )
}
export default ThemeSwitcher