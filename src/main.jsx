import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { MainRoutes } from "./router/routes";
import { store } from '../src/components/App/store';
import { Provider } from 'react-redux'

import "./assets/css/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <Provider store={store}>
    <Router>
      <MainRoutes />
    </Router>
    </Provider>
  </React.StrictMode>
);
