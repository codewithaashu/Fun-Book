import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Pages/Home";
const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user") === null) {
      navigate("/login");
    }
  }, []);
  return <Home />;
};

export default App;
