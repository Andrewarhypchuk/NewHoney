import React, { useState } from "react";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TranslateComponent from "../../TranslateComponent/TranslateComponent";

const DeleteProductComponent = ({ productIndex, setCart, cart }) => {

    const [show, setShow] = useState(false);
    const deleteProduct = () => {
        setCart({
            ...cart, products: [...cart.products.filter(
                (product, index) => index !== productIndex
            )
            ]
        })
        handleClose()
    }
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
    };
    
    return (<>
        <Button className='button btn-danger' variant="primary" onClick={handleShow}>
            <TranslateComponent str='Delete Product' />
        </Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title><TranslateComponent str='When click , you can not cancel this operation !' /></Modal.Title>
            </Modal.Header>
            <Modal.Body><TranslateComponent str="Delete this cart?" /></Modal.Body>
            <Modal.Footer>
                <Button className="btn-danger" variant="secondary" onClick={deleteProduct}>
                    <TranslateComponent str='Delete' />
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                    <TranslateComponent str='Close' />
                </Button>
            </Modal.Footer>
        </Modal>
    </>)
}
export default DeleteProductComponent;