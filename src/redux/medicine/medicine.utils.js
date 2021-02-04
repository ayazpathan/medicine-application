export const addItemToCart = (medicineItems, medicineItemToAdd, ID) => {
  return [...medicineItems, { ...medicineItemToAdd, id: ID + 1 }];
};

export const updateMedicineItem = (medicineItems, medicineItemToUpdate) => {
  let allUpdatedMedicineItems = medicineItems.map((medicineItem) =>
    medicineItem.id === medicineItemToUpdate.id
      ? {
          ...medicineItem,
          name: medicineItemToUpdate.name,
          type: medicineItemToUpdate.type,
          qty: medicineItemToUpdate.qty,
        }
      : medicineItem
  );

  return allUpdatedMedicineItems;
};

export const removeItemFromMedicine = (medicineItems, medicineItemToRemove) => {
  return medicineItems.filter(
    (medicineItem) => medicineItem.id !== medicineItemToRemove.id
  );
};
