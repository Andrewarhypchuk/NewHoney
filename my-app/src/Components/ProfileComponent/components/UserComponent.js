import React from 'react';
import {useSelector} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import TranslateComponent from './../../TranslateComponent/TranslateComponent';

const SimpleUser = () =>{
    const userSettings = useSelector((state)=> state.usersSetting.value);
    return (<div className='d-flex flex-column align-items-center'>
           <div> <TranslateComponent  str='Simple User' />  { userSettings.fullName}   <TranslateComponent  str='successfully logged in' /></div>
           <div> <TranslateComponent str={`Your theme: ${userSettings.theme}`}/> </div>
           <div><TranslateComponent str={`Your language : ${userSettings.language}`}/> </div>
           <div><TranslateComponent str={`Your phone number : ${userSettings.phone}`}/> </div>
           <div><TranslateComponent str={"* You can not see other users"}/> </div>
        </div>
    )
}
export default SimpleUser