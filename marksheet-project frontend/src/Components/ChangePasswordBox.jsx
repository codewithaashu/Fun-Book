import React, { useState } from "react";
import InputComponent from "./InputComponent";

const ChangePasswordBox = () => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const handleChangePassword = () => {
    setFormData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
    console.log(formData);
  };
  return (
    <div className="p-5 flex flex-col gap-5">
      <h1 className="text-lg font-semibold text-gray-600">Change Password</h1>
      <div className="bg-white p-5 md:p-7 rounded-md flex flex-col gap-4  shadow-md mb-3 mt-3 w-1/2 self-center ">
        <InputComponent
          label={"Current Password"}
          placeholder={"Type Current Password Here ..."}
          inputType={"text"}
          field={"currentPassword"}
          formData={formData}
          setFormData={setFormData}
        />
        <InputComponent
          label={"New Password"}
          placeholder={"Type New Password Here ..."}
          inputType={"text"}
          field={"newPassword"}
          formData={formData}
          setFormData={setFormData}
        />
        <InputComponent
          label={"Confirm New Password"}
          placeholder={"Type Confirm Password Here ..."}
          inputType={"text"}
          field={"confirmPassword"}
          formData={formData}
          setFormData={setFormData}
        />
        <button
          className="px-10 py-2 text-white bg-blue w-fit self-center rounded-sm mt-5 text-base font-medium"
          onClick={handleChangePassword}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ChangePasswordBox;
