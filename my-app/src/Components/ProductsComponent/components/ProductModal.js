import React, { useState } from 'react';
import Modal from 'react-modal';

import EditProductModal from './EditProductModal';
import useModalsInformation from './../../../Utiles/hooks/useModalsInformation';
import AddProduct from './AddProduct';

const ProductModal = ({ productId }) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const { isProductInCart, cartId, userProduct } = useModalsInformation(productId)

    return <div>
        <button className='btn btn-warning' onClick={() => setIsOpen(true)}>Add to cart</button>
        <Modal
            isOpen={modalIsOpen}
            ariaHideApp={false}
            onRequestClose={() => setIsOpen(false)}
            className='modalWindow'
        >
            {isProductInCart === undefined ?
             <AddProduct setIsOpen={setIsOpen}
                         cartId={cartId}
                         productId={productId} 
                         /> :
             <EditProductModal 
                    setIsOpen={setIsOpen}
                    cartId={cartId}
                    productId={productId}
                    quantity={userProduct.quantity} />
            }
        </Modal>
    </div>
};

export default ProductModal;