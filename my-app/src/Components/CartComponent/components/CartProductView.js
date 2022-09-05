import React from "react";
import { GetProductById } from "../../../Redux/products-reducer";

import TranslateComponent from "../../TranslateComponent/TranslateComponent";

const CartProductView = ({ product }) => {
  const localProduct = GetProductById(product.productId);

  return (<div className="productView">
    <img className="productImg" src={localProduct.image} alt='img'></img>
    <div><TranslateComponent str='Category' />:{localProduct.category}</div>
    <div><TranslateComponent str={localProduct.title} /></div>
    <div><TranslateComponent str='Price' />:{localProduct.price}$</div>
  </div>)
}

export default CartProductView;