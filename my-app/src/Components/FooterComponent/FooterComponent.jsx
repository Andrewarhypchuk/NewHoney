import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import {useSelector} from "react-redux";

const Footer = () =>{

    const userSettings = useSelector((state)=> state.usersSetting);
return(
    <footer className={`${userSettings.theme}footer`} >

    </footer>
)
}
export default Footer;
