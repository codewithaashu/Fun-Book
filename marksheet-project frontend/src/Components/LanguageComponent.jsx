import React, { useState } from "react";
import { Languages } from "../DB/SubjectsDB";
import Select from "react-select";
const LanguageComponent = ({ formData, setFormData }) => {
  const [options1, setOption1] = useState(Languages);
  const [options2, setOption2] = useState(Languages);
  console.log(formData.firstLanguage);
  return (
    <>
      <h1 className="text-[16px] font-semibold -mt-1">Choose Subject : </h1>
      <div className="w-full flex flex-row justify-between">
        <div className="flex flex-col gap-1 w-1/2">
          <h1 className="text-base font-medium text-gray-500">
            First Language
          </h1>
          {console.log(
            "hello",
            formData.firstLanguage,
            typeof formData.firstLanguage
          )}
          <Select
            options={options1}
            defaultInputValue={formData.firstLanguage}
            menuPlacement="top"
            onChange={(v1) => {
              setFormData({
                ...formData,
                firstLanguage: v1.value,
              });
              setOption2(Languages.filter((o2) => o2.value !== v1.value));
            }}
            className="w-full max-w-xs bg-white  text-[14px]  border-gray-400 outline-none rounded-sm text-gray-700 "
            styles={{
              control: (baseStyles) => ({
                ...baseStyles,
                borderColor: "black",
                borderWidth: "1px",
                color: "black",
                padding: "4px 2px",
              }),
            }}
          />
        </div>
        <div className="flex flex-col gap-1 w-1/2 ">
          <h1 className="text-base font-medium text-gray-500">
            Second Language
          </h1>
          <Select
            menuPlacement="top"
            defaultInputValue={formData.secondLanguage}
            options={options2}
            onChange={(v2) => {
              setFormData({
                ...formData,
                secondLanguage: v2.value,
              });
              setOption1(Languages.filter((o1) => o1.value !== v2.value));
            }}
            className="w-full max-w-xs bg-white  text-[14px]  border-gray-400 outline-none rounded-sm text-gray-700 "
            styles={{
              control: (baseStyles) => ({
                ...baseStyles,
                borderColor: "black",
                borderWidth: "1px",
                color: "black",
                padding: "4px 2px",
              }),
            }}
          />
        </div>
      </div>
    </>
  );
};

export default LanguageComponent;
