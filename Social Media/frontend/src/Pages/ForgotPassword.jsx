import React, { useEffect, useState } from "react";
import InputComponent from "../Components/InputComponent";
import BtnComponent from "../Components/BtnComponent";

const ForgotPassword = () => {
  const [formData, setFormData] = useState({ email: "" });
  useEffect(() => {
    document.title = "Reset Password | FunBook";
  }, []);
  const handleReset = () => {
    console.log(formData);
  };
  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center bg-black text-white">
        <div className="bg-zinc-900 py-8 px-4 flex flex-col gap-2 w-[320px] md:w-[360px]">
          <h1 className="text-xl font-bold">Email Address</h1>
          <p className="text-sm text-gray-400">
            Enter email address used during registration
          </p>
          <div className="pt-4">
            <InputComponent
              label={""}
              placeholder={"Enter your email address here"}
              field={"email"}
              inputType={"email"}
              formData={formData}
              setFormData={setFormData}
            />
          </div>
          <BtnComponent label={"Submit"} handleBtn={handleReset} />
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
