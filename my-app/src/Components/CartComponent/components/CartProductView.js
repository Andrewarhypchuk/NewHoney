import React from "react";

import TranslateComponent from "../../TranslateComponent/TranslateComponent";

const CartProductView = ({ product, list }) => {
  const localProduct = list.filter((item) => item.id === product.productId);

  return (<div className="productView">
    <img className="productImg" src={localProduct[0].image} alt='img'></img>
    <div><TranslateComponent str='Category' />:{localProduct[0].category}</div>
    <div><TranslateComponent str={localProduct[0].title} /></div>
    <div><TranslateComponent str='Price' />:{localProduct[0].price}$</div>
  </div>)
}

export default CartProductView;