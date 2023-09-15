/** @format */
import axios from "axios";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";

import { Auth0Provider } from "@auth0/auth0-react";

// axios.defaults.baseURL = "https://back-end-pf-production.up.railway.app/";
axios.defaults.baseURL = "http://localhost:3001/";

//tenemos que crear el store y ahi recien utilizamos el provider, sino tira error

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Auth0Provider
          domain="dev-k6q8xoldvm16po76.us.auth0.com"
          clientId="reJbt5ReATHQwr9PAtX7zVIA6wLBgB48"
          authorizationParams={{
            redirect_uri: window.location.origin,
          }}
        >
          <App />
        </Auth0Provider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
