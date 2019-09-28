import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {smurfReducer} from "./reducers"

import "./index.css";


const store = createStore(smurfReducer,
    applyMiddleware(thunk))


const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

