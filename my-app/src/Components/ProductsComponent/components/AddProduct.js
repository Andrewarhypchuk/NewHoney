import React, { useState } from "react";
import { useDispatch } from 'react-redux';

import { addCartProduct } from "../../../Redux/carts-reducer";
import TranslateComponent from "../../TranslateComponent/TranslateComponent";

const AddProduct = ({ setIsOpen, cartId, productId }) => {
    const dispatch = useDispatch();
    const [product, setProduct] = useState({ productId: productId, quantity: 1 })
    const addProduct = () => {
        setIsOpen(false)
        dispatch(addCartProduct({ cartId, product }))
    }
    const desreaseQuantity = () => {
        if (product.quantity !== 1) {
            setProduct({ ...product, quantity: product.quantity - 1 })
        }
    }

    return (
        <div className="d-flex flex-column align-items-center">
            <TranslateComponent str='Choose Quantity' />
            <div>
                <input type='button'
                    className="btn btn-danger"
                    onClick={desreaseQuantity}
                    value=" - " />
                <TranslateComponent str={`Quantity: ${product.quantity}`} />
                <input type='button'
                    className="btn btn-success"
                    onClick={() => setProduct({ ...product, quantity: product.quantity + 1 })}
                    value=" + " />
            </div>
            <button className="btn button btn-info" onClick={addProduct}>Add</button>
        </div>
    )
}

export default AddProduct;