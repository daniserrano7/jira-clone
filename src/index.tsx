import React from "react";
import ReactDOM from "react-dom";
import db from "infrastructure/db/db";
import App from "./ui/App";
import "./ui/styles/index.scss";


db.projects.toArray().then(console.log)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
