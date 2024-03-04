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
import Admins from "./Pages/Admins";
import CreateAdmin from "./Pages/CreateAdmin";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import PrintDocument from "./Pages/PrintDocument";
const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/users",
    element: <StudentsList />,
  },
  {
    path: "/admins",
    element: <Admins />,
  },
  {
    path: "/createAdmin",
    element: <CreateAdmin />,
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
    path: "/printDocuments",
    element: <PrintDocument />,
  },
  {
    path: "/changePassword",
    element: <ChangePassword />,
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
