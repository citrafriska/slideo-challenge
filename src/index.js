import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

// // to connect our app to store
import { Provider } from "react-redux";
import configureStore from "./store/store";

// redux-persist
import { PersistGate } from "redux-persist/integration/react";

const { persistor, store } = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
