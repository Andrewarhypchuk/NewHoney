import React from "react";

const LogoComponent = (props) =>{
    return(
        <div className='d-flex flex-column'>
            <div className='headerName'>{props.header}</div>
            <div className='userName'>{props.name}</div>
        </div>
    )
}
export default LogoComponent