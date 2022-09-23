import React from "react";
import { useSelector } from 'react-redux';

import { selectCartByUserId } from "../../../Redux/carts-reducer";
import TranslateComponent from "../../TranslateComponent/TranslateComponent";
import SingleProductComponent from "./SingleProductComponent";

const ProductsListComponent = ({ userId }) => {
    const cart = useSelector(state => selectCartByUserId(state, userId))

    if (cart !== undefined) return (
        <div className='d-flex align-items-center flex-column '>
            {cart.products.length !== 0 ? <div> {
                cart.products.map((product, index) => {

                    return <div key={product.productId} className="cartItemContainer">
                        <SingleProductComponent product={product} cart={cart} />
                    </div>
                })
            }
            </div> : <TranslateComponent str='Empty' />}
        </div>
    )

    return <TranslateComponent str='No Cart' />
}

export default ProductsListComponent;