import MedicineActionTypes from "./medicine.types";
import {
  addItemToCart,
  removeItemFromMedicine,
  updateMedicineItem,
} from "./medicine.utils";

const INITIAL_STATE = {
  autoIcrementID: 0,
  medicineItems: [],
};

const medicineReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MedicineActionTypes.ADD_ITEM:
      return {
        ...state,
        autoIcrementID: state.autoIcrementID + 1,
        medicineItems: addItemToCart(
          state.medicineItems,
          action.payload,
          state.autoIcrementID
        ),
      };
    case MedicineActionTypes.UPDATE_ITEM:
      return {
        ...state,
        medicineItems: updateMedicineItem(state.medicineItems, action.payload),
      };
    case MedicineActionTypes.REMOVE_ITEM:
      return {
        ...state,
        medicineItems: removeItemFromMedicine(
          state.medicineItems,
          action.payload
        ),
      };
    default:
      return state;
  }
};

export default medicineReducer;
