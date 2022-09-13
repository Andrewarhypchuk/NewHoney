import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

import CartProductEdit from '../../CartComponent/components/CartProductEdit';
import TranslateComponent from '../../TranslateComponent/TranslateComponent';
import DeleteProduct from '../../CartComponent/components/ButtonProductDelete';

const EditProductModal = ({ setIsOpen, productId, quantity, cartId }) => {
    const [modalDeleleIsOpen, setModalDeleteIsOpen] = useState(false);

    useEffect(() => {
        if (quantity === 0) {
            setModalDeleteIsOpen(true)
        }
    }, [quantity])

    return <div>
        <div className='d-flex flex-column align-items-center'>
            <TranslateComponent str='You successfully added this product to Cart!' />
            <CartProductEdit quantity={quantity} cartId={cartId} productId={productId} />
            <div className='d-flex'>
                <div className='btn button btn-danger' onClick={() => setModalDeleteIsOpen(true)} >Delete Product</div>
                <div className='btn button btn-light' onClick={() => setIsOpen(false)} >Close</div>
            </div>

        </div>
        <Modal
            isOpen={modalDeleleIsOpen}
            ariaHideApp={false}
            onRequestClose={() => setModalDeleteIsOpen(false)}
            className='modalWindow'
        >
            <div className='d-flex flex-column align-items-center'>
                <TranslateComponent str="Delete Product?" />
                <div className='d-flex'>
                    <DeleteProduct setIsOpen={setIsOpen} cartId={cartId} productId={productId} />
                    <div className='btn button btn-light' onClick={() => setModalDeleteIsOpen(false)}>Cancel</div>
                </div>
            </div>
        </Modal>
    </div>
};

export default EditProductModal;