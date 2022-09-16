import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import ToggleAdminComponent from './ToggleAdminComponent';
import { setId, setName } from '../../../Redux/userData-reducer';
import { selectUsers } from './../../../Redux/users-reducer';
import { toggleIsLogged } from '../../../Redux/userSettings-reducer';

const LogInForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const userList = useSelector(selectUsers).users;
    const { register, handleSubmit, formState: { errors } } = useForm();

    const logIn = ({ username, password }) => {
        const logUser = userList.find((user) => user.username === username.trim() && user.password === password.trim())
        if (logUser) {
            dispatch(setName(username));
            dispatch(toggleIsLogged());
            dispatch(setId(logUser.id));
            navigate("/profile");
        }
    }

    return (
        <form className='logIn_Container' onSubmit={handleSubmit(user => logIn(user))} >
            <label className="label" htmlFor="username">Username</label>
            <input id='username' className="form-control"{...register("username", {
                required: "Поле обов'язковe",
                minLength: {
                    value: 4,
                    message: 'Кількість букв має бути більше 4'
                }
            })}  />
            <div className='error'>{errors?.username && <>{errors?.username?.message || "Error!"}</>}</div>

            <label className="label" htmlFor="password">Password</label>
            <input id='password' className="form-control"   {...register("password", {
                required: "Поле обов'язковe",
                minLength: {
                    value: 6,
                    message: 'Кількість символів має бути більше 6'
                }
            })} />
            <div className='error'>{errors?.password && <>{errors?.password?.message || "Error!"}</>}</div>
            <ToggleAdminComponent />
            <input className='button btn btn-info' type="submit" value="Log In" />
        </form>
    )

}
export default LogInForm;