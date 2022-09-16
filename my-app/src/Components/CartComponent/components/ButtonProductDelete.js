import React from "react";
import { useDispatch } from 'react-redux';

import { deleteСartProduct } from "../../../Redux/carts-reducer";
import TranslateComponent from "../../TranslateComponent/TranslateComponent";

const DeleteProduct = ({setIsOpen = false,cartId,productId})=>{
    const dispatch = useDispatch()
    const deleteProduct = () => {
       setIsOpen && setIsOpen(false)
        dispatch(deleteСartProduct({cartId,productId}))
     }

return <button className="btn button btn-danger" onClick={deleteProduct}><TranslateComponent str='Delete Product' /></button>
}

export default DeleteProduct;