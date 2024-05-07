// import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "@mantine/core/styles.css";
import "./index.css";
import LandingPage from "./pages/LandingPage";
import { MantineProvider } from "@mantine/core";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PortfolioPage from "./pages/PortfolioPage";
import ResumePage from "./pages/ResumePage";
import Homepage from "./pages/Homepage";
import CorporeSanoPage from "./pages/CorporeSanoPage";
import SentencePerDayPage from "./pages/SentencePerDayPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/Portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "/Resume",
        element: <ResumePage />,
      },
      {
        path: "/projects",
        children: [
          {
            path: "CorporeSano",
            element: <CorporeSanoPage />,
          },
          {
            path: "SentencePerDay",
            element: <SentencePerDayPage />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <MantineProvider defaultColorScheme="light">
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </MantineProvider>
  </div>
);
