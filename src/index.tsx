import React from "react";
import ReactDOM from "react-dom";
import { StoreContextProvider } from "infrastructure/store/provider";
import App from "./ui/App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
