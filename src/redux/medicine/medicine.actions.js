import MedicineActionTypes from "./medicine.types";

export const addItem = (item) => ({
  type: MedicineActionTypes.ADD_ITEM,
  payload: item,
});

export const updateItem = (item) => ({
  type: MedicineActionTypes.UPDATE_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: MedicineActionTypes.REMOVE_ITEM,
  payload: item,
});
