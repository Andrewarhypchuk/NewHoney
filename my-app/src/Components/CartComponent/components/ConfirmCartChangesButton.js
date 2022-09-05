import React from "react";
import { useDispatch } from 'react-redux'

import Button from 'react-bootstrap/Button';
import ReactModal from "react-modal";
import { useModal } from "react-modal-hook";
import TranslateComponent from "../../TranslateComponent/TranslateComponent";
import { changeCart } from "../../../Redux/carts-reducer";

const ConfirmCartChangesModal = ({ cart }) => {
    const dispatch = useDispatch();
    const handleShow = () => {
        dispatch(changeCart(cart))
        showModal();
    };
    const [showModal, hideModal] = useModal(() => (
        <ReactModal className='modalContainer' ariaHideApp={false} isOpen>
            <div><TranslateComponent str='Successfully changed!' /></div>
            <div><TranslateComponent str="Changes will be added to this user's cart!" /></div>
            <Button variant="secondary" onClick={hideModal}>
                <TranslateComponent str='Close' />
            </Button>
        </ReactModal>
    ));

    return (

        <Button variant="primary" onClick={handleShow}>
            <TranslateComponent str='Confirm Changes' />
        </Button>
    )
}
export default ConfirmCartChangesModal;