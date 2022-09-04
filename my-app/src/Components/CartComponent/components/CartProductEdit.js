import React from "react";

import TranslateComponent from "../../TranslateComponent/TranslateComponent";
import DeleteProductComponent from "./DeleteProductComponent";

const CartProductEdit = ({ item, productIndex, setCart, cart }) => {
  const increaseQuantity = () => {
    setCart({ ...cart, products: [...cart.products.map((product, index) => index === productIndex ? { ...product, quantity: item.quantity + 1 } : product)] })
  }
  const decreaseQuantity = () => {
    if (item.quantity !== 0) {
      setCart({ ...cart, products: [...cart.products.map((product, index) => index === productIndex ? { ...product, quantity: item.quantity - 1 } : product)] })
    }
  }

  return (
    <div className="d-flex flex-column align-items-center" >
      <div className="d-flex align-items-center justify-content-around ">
        <button className="btn btn-danger" onClick={decreaseQuantity}>-</button>
        <div className="quantityContainer"><TranslateComponent str='Quantity' />: {item.quantity}</div>
        <button className="btn btn-success" onClick={increaseQuantity}>+</button>
      </div>
      <DeleteProductComponent productIndex={productIndex} setCart={setCart} cart={cart} />
    </div>
  )
}

export default CartProductEdit;