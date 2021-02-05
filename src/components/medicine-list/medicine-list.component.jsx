import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { removeItem } from "../../redux/medicine/medicine.actions";
import PropTypes from "prop-types";

import Model from "../../components/model/model";
import RemoveItemWarning from "../remove-item-warning/remove-item-warning";
import "./medicine-list.css";

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
        <table role="table" cellSpacing="25" className="styled-table">
          {renderModel()}
          <thead role="rowgroup">
            <tr role="row">
              <th role="columnheader">ID</th>
              <th role="columnheader">Medicine Name</th>
              <th role="columnheader">Medicine Type</th>
              <th role="columnheader">Quantity</th>
              <th role="columnheader">Update Medicine</th>
              <th role="columnheader">Remove Medicine</th>
            </tr>
          </thead>
          <tbody role="rowgroup">
            {medicineItems.map((medicineItem) => (
              <tr key={medicineItem.id} role="row">
                <td role="cell">{medicineItem.id}</td>
                <td role="cell">{medicineItem.name}</td>
                <td role="cell">{medicineItem.type}</td>
                <td role="cell">{medicineItem.qty}</td>
                <td role="cell">
                  <Button
                    variant="success"
                    onClick={() => {
                      onEdit(medicineItem);
                    }}
                  >
                    Edit
                  </Button>
                </td>
                <td role="cell">
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
        </table>
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
