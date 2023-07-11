import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import LandingPage from "./LandingPage";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <React.StrictMode>
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    </React.StrictMode>
  </div>
);
