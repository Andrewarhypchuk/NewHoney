import React, { useState } from "react";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import TranslateComponent from "../../TranslateComponent/TranslateComponent";
import Form from "./Form";

const AddUser = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <TranslateComponent str='Add user' />
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><TranslateComponent str='You can add a new user' /></Modal.Title>
        </Modal.Header>
        <Modal.Body><Form /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
          <TranslateComponent str='Close' />
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
};

export default AddUser;
