import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Pages/Home";
import { useSelector } from "react-redux";
const App = () => {
  const user = useSelector((state) => state?.user?.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (user === null) {
      navigate("/login");
    }
  });
  return <Home />;
};

export default App;
