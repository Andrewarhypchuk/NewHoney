import React from "react";
import { useDispatch } from 'react-redux';

import TranslateComponent from "../../TranslateComponent/TranslateComponent";
import { increaseProductQuantity,decreaseProductQuantity,deleteСartProduct } from "../../../Redux/carts-reducer";

const CartProductEdit = ({  item,productId,cartId }) => {
  const dispatch = useDispatch()
 
  const increaseQuantity = () => {
      dispatch(increaseProductQuantity({cartId,productId}))
  }
  const decreaseQuantity = () => {
    if (item.quantity !== 0) {
      dispatch(decreaseProductQuantity({cartId,productId}))
    }
  }
  const deleteProduct = () => {
     dispatch(deleteСartProduct({cartId,productId}))
  }

  return (
    <div className="d-flex flex-column align-items-center" >
      <div className="d-flex align-items-center justify-content-around ">
        <button className="btn btn-danger" onClick={decreaseQuantity}>-</button>
        <div className="quantityContainer"><TranslateComponent str='Quantity' />: {item.quantity}</div>
        <button className="btn btn-success" onClick={increaseQuantity}>+</button>
      </div>
      <button className="btn btn-danger" onClick={deleteProduct}><TranslateComponent str='Delete Product' /></button>
    </div>
  )
}

export default CartProductEdit;