// import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "@mantine/core/styles.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { MantineProvider } from "@mantine/core";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <MantineProvider defaultColorScheme="dark">
      <React.StrictMode>
        <BrowserRouter>
          <LandingPage />
        </BrowserRouter>
      </React.StrictMode>
    </MantineProvider>
  </div>
);
