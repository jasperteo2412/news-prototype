import App from "./components/App";
import ReactDOM from "react-dom/client";
import React, { StrictMode } from "react";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
