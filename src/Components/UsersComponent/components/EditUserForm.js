import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { addUser } from '../../../Redux/users-reducer';
import { generatedId } from '../../../Utiles/generateId';

const EditUserForm = ({handleClose}) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      id: generatedId()
    }
  })

  return (
    <div>
      <form className='d-flex flex-column' onSubmit={handleSubmit((user) =>{
        handleClose(false)
        dispatch(addUser(user))
      })}>
        
        <label className="label" htmlFor="username">Username</label>
        <input id='username' className="form-control"  {...register("username", {
            required: "Поле обов'язковe",
            minLength: {
                value: 4,
                message: 'Кількість букв має бути більше 4'
          }
        })}  ></input>
        <div className='error'>{errors?.username && <>{errors?.username?.message || "Error!"}</>}</div>
        
        <label className="label" htmlFor="password">Password</label>
        <input id='password' className="form-control"   {...register("password", {
          required: "Поле обов'язковe",
           minLength: {
               value: 6,
               message: 'Кількість символів має бути більше 6'
          }
        })}></input>
        <div className='error'>{errors?.password && <>{errors?.password?.message || "Error!"}</>}</div>
        
        <label className="label" htmlFor="street">Street</label>
        <input id='street' className="form-control"   {...register("address.street", {
          required: "Поле обов'язковe"
        })}  ></input>
        <div className='error'>{errors?.address?.street && <>{errors?.address?.street?.message || "Error!"}</>}</div>
        
        <label className="label" htmlFor="city">City</label>
        <input id='city' className="form-control"   {...register("address.city", {
          required: "Поле обов'язковe",
        })}  ></input>
        <div className='error'>{errors?.address?.city && <>{errors?.address?.city?.message || "Error!"}</>}</div>
        
        <label className="label" htmlFor="email">Email</label>
        <input id='email' className="form-control"   {...register("email", {
          required: "Поле обов'язковe", pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: 'це не схоже на пошту спробуйте ще'
          }
        })}  ></input>
        <div className='error'>{errors?.email && <>{errors?.email?.message || "Error!"}</>}</div>
        
        <label className="label" htmlFor="phone">Phone</label>
        <input id='phone' className="form-control"  {...register("phone", {
          required: "Поле обов'язковe",
        })}  ></input>
        <div className='error'>{errors?.phone && <>{errors?.phone?.message || "Error!"}</>}</div>
        <input className='button btn btn-info' type="submit" value="Add" />
      </form>
    </div>
  )
};

export default EditUserForm;