import React from "react";
import ReactDOM from "react-dom/client";
import "../src/components/navbar.css";
import "../src/components/body.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
