import React from "react";

const BtnComponent = ({ label, handleBtn }) => {
  return (
    <button
      className="text-sm font-semibold bg-blue w-full p-2 rounded-md mt-7"
      onClick={handleBtn}
    >
      {label}
    </button>
  );
};

export default BtnComponent;
