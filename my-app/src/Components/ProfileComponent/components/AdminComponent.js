import React from 'react';
import {useSelector} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import TranslateComponent from './../../TranslateComponent/TranslateComponent';

const  AdminComponent = () =>{
    const userSettings = useSelector((state)=> state.usersSetting.value);
    return (<div className='d-flex flex-column align-items-center'>
           <div><TranslateComponent str={"You are Admin"}/></div>
           <div> <TranslateComponent str={`Your theme: ${userSettings.theme}`}/> </div>
           <div><TranslateComponent str={`Your language : ${userSettings.language}`}/> </div>

        </div>
    )
}
export default AdminComponent