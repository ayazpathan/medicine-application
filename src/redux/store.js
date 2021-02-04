import { createStore } from "redux";
import { persistStore } from "redux-persist";
import rootReducer from "./root-reducer";

export const store = createStore(rootReducer);
export const persistor = persistStore(store);

export default { store, persistor };
