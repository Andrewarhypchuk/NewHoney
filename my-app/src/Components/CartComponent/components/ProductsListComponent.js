import React, { useState } from "react";

import { GetCartById } from "../../../Redux/carts-reducer";
import CartProductEdit from "./CartProductEdit";
import CartProductView from './CartProductView';
import ConfirmCartChangesModal from './ConfirmCartChangesButton';

const ProductsListComponent = ({ userId }) => {
    const [localCart, setLocalCart] = useState(GetCartById(userId));

      if (localCart !== undefined) return (
      <div className='d-flex align-items-center flex-column '>
        {localCart.products.length !== 0 ? <div> {
            localCart.products.map((product, index) => {

                return <div key={index} className="d-flex align-items-center">
                    <CartProductView product={product} />
                    <CartProductEdit item={product} cart={localCart} setCart={setLocalCart} productIndex={index} />
                </div>
            })
        }
        </div>:<div>Empty</div>}
        <ConfirmCartChangesModal cart={localCart} />
    </div>
    )

    return <div>No cart</div>
}

export default ProductsListComponent;