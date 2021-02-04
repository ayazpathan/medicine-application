import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

import "./fdmove-warning.css";

const RemoveItemWarning = ({ closeModel, confirmDelete, itemName }) => {
  return (
    <div>
      <h6>
        Are you sure you want to delete <b>{itemName}</b>?
      </h6>
      <br />
      <div className="button-container">
        <Button variant="secondary" onClick={closeModel}>
          No
        </Button>
        <Button variant="danger" onClick={confirmDelete}>
          Yes
        </Button>
      </div>
    </div>
  );
};

RemoveItemWarning.propTypes = {
  closeModel: PropTypes.func.isRequired,
  confirmDelete: PropTypes.func.isRequired,
};

export default RemoveItemWarning;
