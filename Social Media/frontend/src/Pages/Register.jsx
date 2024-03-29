import React, { useEffect } from "react";
import RegisterBox from "../Components/RegisterBox";
import AdBox from "../Components/AdBox";

const Register = () => {
  useEffect(() => {
    document.title = "Register | FunBook";
  }, []);
  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center bg-black text-white">
        <div className="flex flex-row">
          <AdBox />
          <RegisterBox />
        </div>
      </div>
    </>
  );
};

export default Register;
