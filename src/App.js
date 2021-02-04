import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../src/components/header/header";
import Home from "../src/pages/home/home";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
