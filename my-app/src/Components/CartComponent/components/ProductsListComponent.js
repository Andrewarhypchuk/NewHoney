import React from "react";

import { SelectCartByUserId } from "../../../Redux/carts-reducer";
import CartProductEdit from "./CartProductEdit";
import CartProductView from './CartProductView';

const ProductsListComponent = ({ userId }) => {
    const cart = SelectCartByUserId(userId)

      if (cart !== undefined) return (
      <div className='d-flex align-items-center flex-column '>
        {cart.products.length !== 0 ? <div> {
            cart.products.map((product, index) => {

                return <div key={product.productId} className="d-flex align-items-center">
                    <CartProductView product={product} />
                    <CartProductEdit item={product} cartId={cart.id} productId={product.productId} />
                </div>
            })
        }
        </div>:<div>Empty</div>}
    </div>
    )

    return <div>No cart</div>
}

export default ProductsListComponent;