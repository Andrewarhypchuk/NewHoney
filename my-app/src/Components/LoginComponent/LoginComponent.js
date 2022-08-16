import React, {createRef, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {setUsers} from "../../Redux/users-reducer";
import IsAdminComponent from "./components/isAdminComponent";
import InputsComponent from "./components/InputsComponent";



const LoginComponent = (props) =>{
    useEffect(()=>{
        dispatch(setUsers())

    },[])
    
    return(
        <div className='d-flex flex-column align-items-center'>
            <IsAdminComponent />
            <InputsComponent />
        </div>
    )
}
export default LoginComponent;
