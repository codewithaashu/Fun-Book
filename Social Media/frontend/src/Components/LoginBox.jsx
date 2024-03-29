import React, { useState } from "react";
import Logo from "./Logo";
import InputComponent from "./InputComponent";
import BtnComponent from "./BtnComponent";
import { Link } from "react-router-dom";
const LoginBox = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleLogin = () => {
    console.log(formData);
  };
  return (
    <>
      <div className="px-5 md:px-8 py-20 bg-zinc-950 rounded-l-md shadow-md w-[320px] md:w-[360px]">
        <Logo />
        <h1 className="text-base font-semibold py-2">Log in your account</h1>
        <div className="flex flex-col gap-3 pt-5">
          <InputComponent
            label={"Email Address"}
            inputType={"text"}
            placeholder={"Enter your email address"}
            field={"email"}
            formData={formData}
            setFormData={setFormData}
          />
          <InputComponent
            label={"Password"}
            inputType={"password"}
            placeholder={"Enter your password"}
            field={"password"}
            formData={formData}
            setFormData={setFormData}
          />
          <a
            href="/forgotPassword"
            className="text-xs font-semibold text-blue text-end -mt-1"
          >
            Forgot Password?
          </a>
        </div>
        <BtnComponent label={"Login"} handleBtn={handleLogin} />
        <div className="text-[13px] text-gray-400 font-semibold pt-3 text-center">
          Create new account? {""}
          <Link to="/register" className="text-blue text-sm">
            Create Account
          </Link>
        </div>
      </div>
    </>
  );
};

export default LoginBox;
