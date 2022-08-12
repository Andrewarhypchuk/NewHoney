import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useSelector} from "react-redux";


const ProfileComponent = () =>{

    const userSettings = useSelector((state)=> state.usersSetting.value);
    if(userSettings.isAdmin){
        return(
            <div>
           You are admin
            </div>
        )
    }else{
        return userSettings.isLogged ? <div>uSERSSS</div>: <div>Simple user is not Logged</div>
    }


}
export default ProfileComponent;
