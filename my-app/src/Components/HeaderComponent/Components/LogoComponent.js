import React from "react";
import {useSelector} from "react-redux";
const LogoComponent = (props) =>{
    const userSettingsName = useSelector((state)=> state.usersSetting.value.name);
    return(
        <div className='d-flex flex-column'>
            <div className='headerName'>
                {props.header}</div>
            <div className='userName'>{userSettingsName}</div>
        </div>
    )
}
export default LogoComponent