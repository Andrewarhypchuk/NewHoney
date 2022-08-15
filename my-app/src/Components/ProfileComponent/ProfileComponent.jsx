import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useSelector} from "react-redux";
import SimpleUser from './components/UserComponent';
import AdminComponent from "./components/AdminComponent";
import TranslateComponent from './../TranslateComponent/TranslateComponent';


const ProfileComponent = () =>{

    const userSettings = useSelector((state)=> state.usersSetting.value);
    if(userSettings.isAdmin){
        return(
           <AdminComponent />
        )
    }else{
        return userSettings.isLogged ? <SimpleUser />:
         <div className='d-flex flex-column align-items-center'>
             <TranslateComponent  str="Sorry you are not logged"/>
        </div>
    }


}
export default ProfileComponent;
