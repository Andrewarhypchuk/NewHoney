import React, {createRef, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useDispatch, useSelector} from "react-redux";
import {setName, toggleAdmin, toggleIsLogged} from "../../Redux/usersSetting-reducer";
import {getUsers} from "../../Redux/users-reducer";
import { useNavigate } from "react-router-dom";



const LoginComponent = (props) =>{
    const dispatch = useDispatch();
    let passwordRef = createRef();
    let nameRef = createRef();
    let navigate = useNavigate()
    const toggleCurrentAdmin = ()=>{
        dispatch(toggleAdmin())
    }
    const login = (users,name,password) =>{
        let loggingUser = users.filter((DataUser)=> {
            return  DataUser.username === name.trim() && DataUser.password === password.trim()
        })
        if(loggingUser.length !== 0){
            dispatch(setName(name))
            dispatch(toggleIsLogged())
            passwordRef.current.value = '';
            nameRef.current.value = '';
            navigate('/profile')
        }else{
            passwordRef.current.value = '';
            nameRef.current.value = '';
            alert('wrong password or name')
        }
    }
    useEffect(()=>{
        dispatch(getUsers())

    },[])
    const userSettings = useSelector((state)=> state.usersSetting.value);
    const users = useSelector((state)=>state.users)

    console.log(userSettings)
    return(
        <div className='d-flex flex-column align-items-center'>
            <div>Is admin: {userSettings.isAdmin.toString()}</div>
            <div className="mb-3 col-4 fs-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input ref={nameRef} type="text" className="form-control fs-3" id="exampleFormControlInput1"
                       placeholder="email..." />
            </div>
            <div className="mb-3 col-4 fs-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                <input ref={passwordRef} type="password" className="form-control fs-3" id="exampleFormControlInput1"
                       placeholder="password..."/>
            </div>

            <div className="form-check">
                <input onChange={toggleCurrentAdmin} className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        I am admin
                    </label>
            </div>
            <button onClick={()=>{login(users.users,nameRef.current.value,passwordRef.current.value)}} type="button" className="btn btn-success">Log in</button>
        </div>
    )
}
export default LoginComponent;
