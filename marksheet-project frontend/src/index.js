import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import StudentsList from "./Pages/StudentsList";
import StudentRegistration from "./Pages/StudentRegistration";
import Results from "./Pages/Results";
import DeclareResult from "./Pages/DeclareResult";
import ChangePassword from "./Pages/ChangePassword";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <StudentsList />,
  },
  {
    path: "/studentRegistration",
    element: <StudentRegistration />,
  },
  {
    path: "/results",
    element: <Results />,
  },
  {
    path: "/declareResult",
    element: <DeclareResult />,
  },
  {
    path: "/changePassword",
    element: <ChangePassword />,
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
