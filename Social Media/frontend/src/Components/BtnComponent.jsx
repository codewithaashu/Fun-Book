import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const BtnComponent = ({ label, handleBtn }) => {
  const location = useLocation();
  const [path, setPath] = useState("/");
  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname]);
  return (
    <button
      className={`text-sm font-semibold bg-blue w-full p-2 rounded-md ${
        path === "/forgotPassword" ? "mt-1" : "mt-7"
      }`}
      onClick={handleBtn}
    >
      {label}
    </button>
  );
};

export default BtnComponent;
