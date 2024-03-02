import React, { useState } from "react";
import SelectComponent from "../Components/SelectComponent";
import InputComponent from "../Components/InputComponent";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    userType: "",
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleLogin = () => {
    console.log(formData);
    setFormData({
      userType: "",
      username: "",
      password: "",
    });
    navigate("/admin");
  };
  return (
    <div className="flex flex-row justify-center items-center h-screen">
      <div className="bg-white w-11/12 md:w-1/4 px-7 py-10 rounded-md shadow-md flex flex-col gap-4">
        <h1 className="text-2xl font-semibold text-black text-center mb-3">
          Login
        </h1>
        <SelectComponent
          label={"User Type"}
          data={["Admin", "Super Admin"]}
          defaultValue={"Select User Type"}
          field={"userType"}
          formData={formData}
          setFormData={setFormData}
        />
        <InputComponent
          label={"Username"}
          inputType={"text"}
          field={"username"}
          formData={formData}
          setFormData={setFormData}
          placeholder={"Enter Username Here..."}
        />
        <InputComponent
          label={"Password"}
          inputType={"password"}
          field={"password"}
          formData={formData}
          setFormData={setFormData}
          placeholder={"Enter Password Here..."}
        />
        <button
          className="bg-blue py-2 text-white text-lg font-bold mt-5"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
