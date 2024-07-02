import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ItemStorage } from "./store/ProductData";
import { ToastContainer } from "react-toastify";
import { Auth0Provider } from '@auth0/auth0-react';
import "react-toastify/dist/ReactToastify.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-uttihpqxwtqd2xnr.us.auth0.com"
      clientId="7DZwazDMT4kbeYfIlrILCICqodgmv9vA"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <ItemStorage>
        <App />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </ItemStorage>
    </Auth0Provider>
  </React.StrictMode>
);

reportWebVitals();
