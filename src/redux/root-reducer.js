import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import medicineReducer from "./medicine/medicine.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["medicine"],
};

const rootReducer = combineReducers({ medicine: medicineReducer });

export default persistReducer(persistConfig, rootReducer);
