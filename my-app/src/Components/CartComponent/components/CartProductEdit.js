import React from "react";
import { useDispatch } from 'react-redux';

import TranslateComponent from "../../TranslateComponent/TranslateComponent";
import { changeCart } from "../../../Redux/carts-reducer";

const CartProductEdit = ({ item, productId, cart }) => {
  const dispatch = useDispatch()
  const increaseQuantity = () => {
      dispatch(changeCart({ ...cart, products: [...cart.products.map((product) => product.productId === productId ? { ...product, quantity: item.quantity + 1 } : product)] }))
  }
  const decreaseQuantity = () => {
    if (item.quantity !== 0) {
      dispatch(changeCart({ ...cart, products: [...cart.products.map((product) => product.productId === productId ? { ...product, quantity: item.quantity - 1 } : product)] }))
    }
  }
  const deleteProduct = () => {
      dispatch(changeCart({ ...cart, products: [...cart.products.filter((product) => product.productId !== productId)] }))
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