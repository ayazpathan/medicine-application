import React, { useState } from "react";
import { Table, thead, tbody, tr, td, th, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { removeItem } from "../../redux/medicine/medicine.actions";
import PropTypes from "prop-types";

import Model from "../../components/model/model";
import RemoveItemWarning from "../remove-item-warning/remove-item-warning";

const MedicineList = ({ medicineItems, removeItem, onEdit }) => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const closeModel = () => {
    setIsModelOpen(false);
    setSelectedItem({});
  };

  const confirmDelete = () => {
    removeItem(selectedItem);
    setIsModelOpen(false);
  };

  const renderModel = () => {
    return isModelOpen === true ? (
      <Model title="Medicine Delete" closeModel={closeModel}>
        <RemoveItemWarning
          closeModel={closeModel}
          confirmDelete={confirmDelete}
          itemName={selectedItem.name}
        />
      </Model>
    ) : null;
  };

  return (
    <div>
      {medicineItems.length > 0 ? (
        <Table striped bordered hover>
          {renderModel()}
          <thead>
            <tr>
              <th>ID</th>
              <th>Medicine Name</th>
              <th>Medicine Type</th>
              <th>Quantity</th>
              <th>Update Medicine</th>
              <th>Remove Medicine</th>
            </tr>
          </thead>
          <tbody>
            {medicineItems.map((medicineItem) => (
              <tr key={medicineItem.id}>
                <td>{medicineItem.id}</td>
                <td>{medicineItem.name}</td>
                <td>{medicineItem.type}</td>
                <td>{medicineItem.qty}</td>
                <td>
                  <Button
                    variant="success"
                    onClick={() => {
                      onEdit(medicineItem);
                    }}
                  >
                    Edit
                  </Button>
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => {
                      setSelectedItem(medicineItem);
                      setIsModelOpen(true);
                    }}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <h5>There is no medicine available at the moment!</h5>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
});

const mapStateToProps = ({ medicine: { medicineItems } }) => ({
  medicineItems,
});

MedicineList.propTypes = {
  medicineItems: PropTypes.array.isRequired,
  removeItem: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicineList);
