import React, { useState } from "react";
import Logo from "./Logo";
import InputComponent from "./InputComponent";
import BtnComponent from "./BtnComponent";
import { Link } from "react-router-dom";
import { getUser, loginUser } from "../utils/APIRequest";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { login } from "../Redux/UserSlice";
const LoginBox = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorFormData, setErrorFormData] = useState({
    email: null,
    password: null,
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = async () => {
    //login the user
    setLoading(true);
    const user = await loginUser(formData);
    setLoading(false);
    //if success true, navigate to home page and fetch user info
    if (user) {
      setFormData({
        email: "",
        password: "",
      });
      dispatch(login(user));
      navigate("/");
    }
  };
  return (
    <>
      <div className="px-5 md:px-8 py-20 bg-zinc-900 rounded-l-md shadow-md w-[320px] md:w-[360px]">
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
            errorFormData={errorFormData}
            setErrorFormData={setErrorFormData}
          />
          <InputComponent
            label={"Password"}
            inputType={"password"}
            placeholder={"Enter your password"}
            field={"password"}
            formData={formData}
            setFormData={setFormData}
            errorFormData={errorFormData}
            setErrorFormData={setErrorFormData}
          />
          <Link
            to="/forgot-password"
            className="text-xs font-semibold text-blue text-end -mt-1"
          >
            Forgot Password?
          </Link>
        </div>
        <BtnComponent
          label={"Login"}
          handleBtn={handleLogin}
          loading={loading}
          active={Object.keys(errorFormData).every(
            (curr) => errorFormData[curr] === true
          )}
        />
        <div className="text-[13px] text-gray-400 font-semibold pt-3 text-center">
          Create new account? {""}
          <Link to="/register" className="text-blue text-sm">
            Create Account
          </Link>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default LoginBox;
