import React, { useState } from "react";

import CartProductEdit from "./CartProductEdit";
import CartProductView from './CartProductView';
import ConfirmCartChangesModal from './ConfirmCartChangesButton';

const ProductsListComponent = ({ list, cart }) => {
    const [localCart, setLocalCart] = useState(cart);

    return (<div className='d-flex align-items-center flex-column '>
        {localCart.products.length !== 0 ? <div> {
            localCart.products.map((item, index) => {

                return <div className="d-flex align-items-center">
                    <CartProductView list={list} product={item} />
                    <CartProductEdit item={item} cart={localCart} setCart={setLocalCart} productIndex={index} />
                </div>
            })
        }
        </div> : <div>Empty</div>}
        <ConfirmCartChangesModal cart={localCart} />
    </div>
    )
}

export default ProductsListComponent;