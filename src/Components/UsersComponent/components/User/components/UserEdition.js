import React from "react";
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { editUser, deleteUser } from "../../../../../Redux/users-reducer";
import TranslateComponent from "../../../../TranslateComponent/TranslateComponent";

const UserEdition = ({ user, setStatus }) => {

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      id: user.id,
      username: user.username,
      password: user.password,
      address: {
        city: user.address.city,
        street: user.address.street,
      },
      email: user.email,
      phone: user.phone,
    }
  })
  const dispatch = useDispatch();
  const edit = (user) => {
    dispatch(editUser(user))
    setStatus(true)
  }

  return (
    <div className="d-flex">
      <form className='d-flex flex-column' onSubmit={handleSubmit((user) => edit(user))}>
        <label className="label" htmlFor="username">Username</label>
        <input id='username' className="form-control"  {...register("username", {
          required: "Поле обов'язковe", minLength: {
            value: 4,
            message: 'Кількість букв має бути більше 4'
          }
        })}  ></input>
        <div className='error'>{errors?.username && <>{errors?.username?.message || "Error!"}</>}</div>
        <label className="label" htmlFor="password">
          Password
        </label>
        <input id='password' className="form-control"   {...register("password", {
          required: "Поле обов'язковe", minLength: {
            value: 6,
            message: 'Кількість символів має бути більше 6'
          }
        })}  ></input>
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
        <input className='button btn btn-primary' type="submit" value="Edit" />
      </form>
      <button className="button btn btn-danger" onClick={() => dispatch(deleteUser(user.id))}>
        <TranslateComponent str='Delete User' />
      </button>
    </div>
  )
};

export default UserEdition;