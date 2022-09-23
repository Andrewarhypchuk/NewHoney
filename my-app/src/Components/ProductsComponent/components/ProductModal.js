import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from 'react-modal';

import EditProductModal from './EditProductModal';
import useModalsInformation from './../../../Utiles/hooks/useModalsInformation';
import { addCartProduct } from '../../../Redux/carts-reducer';
import TranslateComponent from '../../TranslateComponent/TranslateComponent';

const ProductModal = ({ productId }) => {
    const dispatch = useDispatch();

    const [modalIsOpen, setIsOpen] = useState(false);
    const { isProductInCart, cartId } = useModalsInformation(productId);

    const addProduct = () => {
        const product = { productId: productId, quantity: 1 }
        if (isProductInCart === undefined) {
            dispatch(addCartProduct({ cartId, product }))
            setIsOpen(true)
        } else {
            setIsOpen(true)
        }
    }

    return <div>
        <button className='btn btn-warning' onClick={addProduct}><TranslateComponent str='Add to cart'/></button>
        <Modal
            isOpen={modalIsOpen}
            ariaHideApp={false}
            onRequestClose={() => setIsOpen(false)}
            className='modalWindow'
        >
            {isProductInCart !== undefined &&
                <EditProductModal
                    setIsOpen={setIsOpen}
                    cartId={cartId}
                    productId={productId}
                    quantity={isProductInCart.quantity} />
            }
        </Modal>
    </div>
};

export default ProductModal;