import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setUsers} from "../../Redux/users-reducer";
import IsAdminComponent from './components/isAdminComponent';
import InputsComponent from "./components/InputsComponent";


const LoginComponent = () =>{
 
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(setUsers())
    })

    return(
        <div className='d-flex flex-column align-items-center'>
           <IsAdminComponent />
           <InputsComponent />
        </div>
    )
}
export default LoginComponent;
