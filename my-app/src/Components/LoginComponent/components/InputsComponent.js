import React from "react";
import {setFullName, setName, setPhone,toggleIsLogged} from "../../Redux/usersSetting-reducer";
import { Users } from './../../Redux/users-reducer';
import {useDispatch} from "react-redux";

const InputsComponent = ()=>{
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
      const toggleCurrentAdmin = ()=>{
          dispatch(toggleAdmin())
      }
    const passwordRef = createRef();
    const nameRef = createRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logIn = (users,name,password) =>{
        let loggingUser = users.filter((DataUser)=> {
            return  DataUser.username === name.trim() && DataUser.password === password.trim()
        })
        if(loggingUser.length !== 0){
            dispatch(setFullName( capitalizeFirstLetter(loggingUser[0].name.firstname)+
             ' ' + capitalizeFirstLetter(loggingUser[0].name.lastname)
             ))
            dispatch(setName(name))
            dispatch(toggleIsLogged())
            dispatch(setPhone(loggingUser[0].phone))
            passwordRef.current.value = '';
            nameRef.current.value = '';
            navigate('/profile')
        }else{
            passwordRef.current.value = '';
            nameRef.current.value = '';
            alert('wrong password or name')
        }
    }

    return(
    <>
             <div className="mb-3 col-4 fs-3">
                <label htmlFor="exampleFormControlInput1" className="form-label"><TranslateComponent str='User name' /></label>
                <input ref={nameRef} type="text" className="form-control fs-3" id="exampleFormControlInput1"
                       placeholder="email..." />
            </div>
            <div className="mb-3 col-4 fs-3">
                <label htmlFor="exampleFormControlInput1" className="form-label"><TranslateComponent str='Password' /></label>
                <input ref={passwordRef} type="password" className="form-control fs-3" id="exampleFormControlInput1"
                       placeholder="password..."/>
            </div>

            <div className="form-check">
                <input onChange={toggleCurrentAdmin} className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        I am admin
                    </label>
            </div>
            <button onClick={()=>{logIn(Users.users,nameRef.current.value,passwordRef.current.value)}} type="button" className="btn btn-success">Log in</button>
    </>
)

}
export default InputsComponent;