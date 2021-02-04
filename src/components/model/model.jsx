import React from "react";
import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";

const Model = ({ closeModel, title, children }) => {
  return (
    <Modal show={true} backdrop="static" onHide={closeModel} keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

Model.propTypes = {
  closeModel: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Model;
