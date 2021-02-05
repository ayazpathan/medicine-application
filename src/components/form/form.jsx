import React, { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import PropTypes from "prop-types";

import "./form.css";

const MedicineForm = ({
  MedicineFormHandler,
  closeModel,
  operationType,
  medicineItem,
}) => {
  var formState;

  if (operationType === "ADD_ITEM") {
    formState = {
      name: "",
      type: "Select Medicine Type",
      qty: 0,
    };
  } else {
    formState = {
      id: medicineItem.id,
      name: medicineItem.name,
      type: medicineItem.type,
      qty: medicineItem.qty,
    };
  }

  const [isError, setIsError] = useState(false);
  const [medicineDetails, setMedicineDetails] = useState(formState);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setMedicineDetails({ ...medicineDetails, [name]: value });
  };

  const submitMedicineHandler = () => {
    if (
      medicineDetails.name !== "" &&
      medicineDetails.type !== "Select Medicine Type" &&
      medicineDetails.qty !== 0
    ) {
      setIsError(false);
      MedicineFormHandler(medicineDetails);
      closeModel();
    } else {
      setIsError(true);
    }
  };

  return (
    <Form className="container">
      <Form.Group controlId="formName">
        <Form.Label>Medicine Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Medicine Name"
          value={medicineDetails.name}
          onChange={handleChange}
          name="name"
        />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Medicine Type</Form.Label>
        <Form.Control
          as="select"
          defaultValue={medicineDetails.type}
          onChange={handleChange}
          name="type"
        >
          <option>Select Medicine Type</option>
          <option>Capsule</option>
          <option>Syrup</option>
          <option>Cream</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formQty">
        <Form.Label>Quantity</Form.Label>
        <Form.Control
          name="qty"
          type="number"
          placeholder="Quantity"
          value={medicineDetails.qty}
          onChange={handleChange}
        />
      </Form.Group>
      <Button
        variant="primary"
        onClick={() => {
          submitMedicineHandler();
        }}
      >
        Save Changes
      </Button>
      <br />
      {isError === true ? (
        <Alert variant="danger">Please enter all details</Alert>
      ) : null}
    </Form>
  );
};

MedicineForm.propTypes = {
  MedicineFormHandler: PropTypes.func.isRequired,
  closeModel: PropTypes.func.isRequired,
  operationType: PropTypes.func.isRequired,
  medicineItem: PropTypes.object,
};

export default MedicineForm;
