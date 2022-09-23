import React from "react";
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { changeSearchValue } from "../../../Redux/products-reducer";


const SearchProductByProductId = () => {
    const dispatch = useDispatch();
    const onSubmit = (data, e) => {
        console.log(data.productId)
        dispatch(changeSearchValue(data.productId))
    }
    const { register, handleSubmit } = useForm({
        defaultValues: {
            productId: ''
        }
    })
    return (
    <form className='d-flex flex-column align-items-center' onSubmit={handleSubmit(onSubmit)}>
        <label className="label" htmlFor="productId">Find Product by Id</label>
        <input id='productId' className="form-control"  {...register("productId")}  ></input>
    </form>)

}

export default SearchProductByProductId;