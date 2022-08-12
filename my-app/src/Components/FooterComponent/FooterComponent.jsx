import React, {useEffect, useState} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import {useSelector} from "react-redux";

const Footer = () =>{

    const userSettings = useSelector((state)=> state.usersSetting.value);
return(
    <footer className={`${userSettings.theme}footer`} >

    </footer>
)
}
export default Footer;
