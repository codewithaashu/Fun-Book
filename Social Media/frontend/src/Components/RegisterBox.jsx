import React, { useState } from "react";
import Logo from "./Logo";
import InputComponent from "./InputComponent";
import BtnComponent from "./BtnComponent";
import { Link } from "react-router-dom";

const RegisterBox = () => {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    cPassword: "",
  });
  const handleRegister = () => {
    console.log(formData);
  };
  return (
    <>
      <div className="px-5 md:px-8 py-20 bg-zinc-950 rounded-r-md shadow-md w-[320px] md:w-[360px]">
        <Logo />
        <h1 className="text-base font-semibold py-2">Create your account</h1>
        <div className="flex flex-col gap-3 pt-5">
          <div className="flex gap-3">
            <InputComponent
              label={"First Name"}
              inputType={"text"}
              placeholder={"First name"}
              field={"fName"}
              formData={formData}
              setFormData={setFormData}
            />
            <InputComponent
              label={"Last Name"}
              inputType={"text"}
              placeholder={"Last name"}
              field={"lName"}
              formData={formData}
              setFormData={setFormData}
            />
          </div>
          <InputComponent
            label={"Email Address"}
            inputType={"text"}
            placeholder={"Enter your email address"}
            field={"email"}
            formData={formData}
            setFormData={setFormData}
          />
          <div className="flex gap-3">
            <InputComponent
              label={"Password"}
              inputType={"password"}
              placeholder={"Password"}
              field={"password"}
              formData={formData}
              setFormData={setFormData}
            />
            <InputComponent
              label={"Confirm Password"}
              inputType={"password"}
              placeholder={"Confirm password"}
              field={"cPassword"}
              formData={formData}
              setFormData={setFormData}
            />
          </div>
        </div>
        <BtnComponent label={"Create Account"} handleBtn={handleRegister} />
        <div className="text-[13px] text-gray-400 font-semibold pt-3 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue text-sm">
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default RegisterBox;
