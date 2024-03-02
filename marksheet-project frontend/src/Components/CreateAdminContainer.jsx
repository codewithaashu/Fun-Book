import React, { useState } from "react";
import InputComponent from "./InputComponent";
import SelectComponent from "./SelectComponent";

const CreateAdminContainer = () => {
  const [formData, setFormData] = useState({
    userType: "",
    username: "",
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = () => {
    console.log(formData);
    setFormData({
      userType: "",
      username: "",
      name: "",
      email: "",
      password: "",
    });
  };
  return (
    <>
      <div className="p-5 flex flex-col gap-5 w-full h-screen">
        <h1 className="text-lg font-semibold text-gray-600">Create Admin</h1>
        <div className="bg-white p-5 md:p-7 rounded-md flex flex-col gap-4  shadow-md mb-3 mt-3 self-center w-1/2 ">
          <SelectComponent
            label={"User Type"}
            data={["Admin", "Super Admin"]}
            defaultValue={"Select User Type"}
            field={"userType"}
            formData={formData}
            setFormData={setFormData}
          />
          <InputComponent
            label={"Name"}
            placeholder={"Enter Name Here..."}
            inputType={"text"}
            formData={formData}
            setFormData={setFormData}
            field={"name"}
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
            label={"Email"}
            inputType={"email"}
            field={"email"}
            formData={formData}
            setFormData={setFormData}
            placeholder={"Enter Email Here..."}
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
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateAdminContainer;
