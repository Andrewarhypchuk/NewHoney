import React, { useState } from "react";
import { useDispatch } from 'react-redux'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TranslateComponent from "../../TranslateComponent/TranslateComponent";
import { changeCart } from "../../../Redux/carts-reducer";

const ConfirmCartChangesModal = ({ cart }) => {

    const dispatch = useDispatch();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        dispatch(changeCart(cart))
        setShow(true);
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                <TranslateComponent str='Confirm Changes' />
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title><TranslateComponent str='Successfully changed' /></Modal.Title>
                </Modal.Header>
                <Modal.Body><TranslateComponent str="Changes will be added to this user's cart!" /></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        <TranslateComponent str='Close' />
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default ConfirmCartChangesModal;