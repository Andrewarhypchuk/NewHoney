import React, { useEffect, useState } from "react";
import Modal from 'react-modal';


import CartProductView from './CartProductView';
import CartProductEdit from './CartProductEdit';
import DeleteProduct from './ButtonProductDelete';
import TranslateComponent from './../../TranslateComponent/TranslateComponent';


const SingleProductComponent = ({ product, cart }) => {
    const [modalDeleleIsOpen, setModalDeleteIsOpen] = useState(false);

    useEffect(() => {
        if (product.quantity === 0) {
            setModalDeleteIsOpen(true)
        }
    }, [product.quantity])

    return (
        <div key={product.productId} className="cartItemContainer">
            <div className="cartItemContainer">
                <CartProductView product={product} />
                <CartProductEdit quantity={product.quantity} cartId={cart.id} productId={product.productId} />
                <DeleteProduct cartId={cart.id} productId={product.productId} />
            </div>
            <Modal
                isOpen={modalDeleleIsOpen}
                ariaHideApp={false}
                onRequestClose={() => setModalDeleteIsOpen(false)}
                className='modalWindow'
            >
                <div className='d-flex flex-column align-items-center'>
                    <TranslateComponent str="Delete Product?" />
                    <div className='buttons_container'>
                        <DeleteProduct setIsOpen={setModalDeleteIsOpen} cartId={cart.id} productId={product.productId} />
                        <div className='btn button btn-light' onClick={() => setModalDeleteIsOpen(false)}>
                            <TranslateComponent str='cancel' />
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )


}

export default SingleProductComponent;