import React, { useState } from "react";
import { Container, Row, Button } from "react-bootstrap";
import Model from "../../components/model/model";
import MedicineForm from "../../components/form/form";
import MedicineList from "../../components/medicine-list/medicine-list.component";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addItem, updateItem } from "../../redux/medicine/medicine.actions";

const Home = ({ addItem, updateItem }) => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [modelTitle, setModelTitle] = useState("Add New Medicine");
  const [operation, setOperation] = useState("ADD_ITEM");
  const [updateItemValue, setUpdateItemValue] = useState({});

  const addNewMedicineHandler = () => {
    setModelTitle("Add New Medicine");
    setOperation("ADD_ITEM");
    setUpdateItemValue({});
    openModel();
  };

  const openModel = () => {
    setIsModelOpen(true);
  };

  const closeModel = () => {
    setIsModelOpen(false);
  };

  const updateMedicineHandler = (item) => {
    setModelTitle("Update Medicine");
    setOperation("UPDATE_ITEM");
    setUpdateItemValue(item);
    setIsModelOpen(true);
  };

  return (
    <Container>
      {isModelOpen === true ? (
        <Model closeModel={closeModel} title={modelTitle}>
          <MedicineForm
            MedicineFormHandler={
              operation === "ADD_ITEM" ? addItem : updateItem
            }
            closeModel={closeModel}
            operationType={operation}
            medicineItem={updateItemValue}
          />
        </Model>
      ) : null}
      <Row className="justify-content-md-center">
        <div style={{ marginTop: "50px" }}>
          <Button variant="outline-primary" onClick={addNewMedicineHandler}>
            Add Medicine
          </Button>
        </div>
      </Row>
      <Row className="justify-content-md-center">
        <div style={{ marginTop: "50px" }}>
          <MedicineList onEdit={updateMedicineHandler} />
        </div>
      </Row>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  updateItem: (item) => dispatch(updateItem(item)),
});

Home.propTypes = {
  addItem: PropTypes.func.isRequired,
  updateItem: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Home);
