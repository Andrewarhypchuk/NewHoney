import React from "react";
import { useForm } from 'react-hook-form';
import { setSearchName } from '../../../Redux/users-reducer';
import { useDispatch } from 'react-redux';

const SearchCartByUserName = () => {
    const dispatch = useDispatch();
    const onSubmit = (data, e) => dispatch(setSearchName(data.username))
    const { register, handleSubmit } = useForm({
        defaultValues: {
            username: ''
        }
    })
    return (
    <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
        <label className="label" htmlFor="username">Find Cart by Username</label>
        <input id='username' className="form-control"  {...register("username")}  ></input>
    </form>)

}

export default SearchCartByUserName;