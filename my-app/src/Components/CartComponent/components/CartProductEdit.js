import React from "react";
import { useDispatch } from 'react-redux';

import TranslateComponent from "../../TranslateComponent/TranslateComponent";
import { increaseProductQuantity,decreaseProductQuantity} from "../../../Redux/carts-reducer";

const CartProductEdit = ({  quantity,productId,cartId }) => {
  const dispatch = useDispatch()
 
  const increaseQuantity = () => {
      dispatch(increaseProductQuantity({cartId,productId}))
  }
  const decreaseQuantity = () => {
    if (quantity !== 0) {
      dispatch(decreaseProductQuantity({cartId,productId}))
    }
  }

  return (
    <div className="d-flex flex-column align-items-center" >
      <div className="d-flex align-items-center justify-content-around ">
        <button className="btn btn-danger" onClick={decreaseQuantity}>-</button>
        <div className="quantityContainer"><TranslateComponent str='Quantity' />: {quantity}</div>
        <button className="btn btn-success" onClick={increaseQuantity}>+</button>
      </div>
     </div>
  )
}

export default CartProductEdit;