import React from "react";
import { selectProductById } from "../../../Redux/products-reducer";

import TranslateComponent from "../../TranslateComponent/TranslateComponent";
import { useSelector } from 'react-redux';

const CartProductView = ({ product }) => {
  console.log(product)
  const localProduct = useSelector(state=>selectProductById(state,product.productId));

  return (<div className="productView">
    <img className="productImg" src={localProduct.image} alt='img'></img>
    <div><TranslateComponent str='Category' />:{localProduct.category}</div>
    <div><TranslateComponent str={localProduct.title} /></div>
    <div><TranslateComponent str='Price' />:{localProduct.price}$</div>
  </div>)
}

export default CartProductView;