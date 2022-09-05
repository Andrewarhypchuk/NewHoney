import React from "react";

import Button from 'react-bootstrap/Button';
import ReactModal from "react-modal";
import { useModal } from "react-modal-hook";
import TranslateComponent from "../../TranslateComponent/TranslateComponent";

const DeleteProductComponent = ({ productIndex, setCart, cart }) => {
    const deleteProduct = () => {
        setCart({
            ...cart, products: [...cart.products.filter(
                (product, index) => index !== productIndex
            )
            ]
        })
        hideModal()
    }
    const [showModal, hideModal] = useModal(() => (
        <ReactModal className='modalContainer' ariaHideApp={false} isOpen>
            <TranslateComponent str="Delete this cart?" />
            <div>
                <Button className="button btn-danger" variant="secondary" onClick={deleteProduct}>
                    <TranslateComponent str='Delete' />
                </Button>
                <Button className="button" variant="secondary" onClick={hideModal}>
                    <TranslateComponent str='Close' />
                </Button>
            </div>
        </ReactModal>
    ));

    return (
        <Button className='button btn-danger' variant="primary" onClick={showModal}>
            <TranslateComponent str='Delete Product' />
        </Button>
    )
}
export default DeleteProductComponent;