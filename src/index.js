import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@mantine/core/styles.css";
import { BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { MantineProvider } from "@mantine/core";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <React.StrictMode>
      <MantineProvider>
        <BrowserRouter>
          <LandingPage />
        </BrowserRouter>
      </MantineProvider>
    </React.StrictMode>
  </div>
);
