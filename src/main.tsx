import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./App.css";
import { Toaster } from "react-hot-toast";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateSurveyPage from "./pages/CreateSurveyPage.tsx";
import VoteSurveyPage from "./pages/VoteSurveyPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",

    element: <CreateSurveyPage />,
  },
  {
    path: "/:surveyId",
    element: <VoteSurveyPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Toaster />
    <RouterProvider router={router} />
  </React.StrictMode>
);
