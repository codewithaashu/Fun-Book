import React, { useState } from "react";
import BtnComponent from "../Components/BtnComponent";
import InputComponent from "../Components/InputComponent";
import { useParams } from "react-router-dom";

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    otp: "",
    password: "",
    cPassword: "",
  });
  const { email } = useParams();
  const handleChangePassword = () => {
    console.log(email);
    console.log(formData);
  };
  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center bg-black text-white">
        <div className="bg-zinc-900 py-8 px-4 flex flex-col gap-2 w-[320px] md:w-[360px]">
          <h1 className="text-xl font-bold">Reset Password</h1>
          <div className="pt-4 flex flex-col gap-3">
            <InputComponent
              label={"One Time Password(OTP)"}
              placeholder={"Enter OTP here..."}
              field={"otp"}
              inputType={"number"}
              formData={formData}
              setFormData={setFormData}
            />
            <InputComponent
              label={"New Password"}
              placeholder={"Enter new password here..."}
              field={"password"}
              inputType={"password"}
              formData={formData}
              setFormData={setFormData}
            />
            <InputComponent
              label={"Confirm Password"}
              placeholder={"Enter password again..."}
              field={"cPassword"}
              inputType={"password"}
              formData={formData}
              setFormData={setFormData}
            />
          </div>
          <BtnComponent label={"Submit"} handleBtn={handleChangePassword} />
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
