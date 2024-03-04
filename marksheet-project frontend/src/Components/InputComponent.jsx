import React from "react";

const InputComponent = ({
  label,
  inputType,
  placeholder,
  isResult = false,
  field,
  formData,
  setFormData,
}) => {
  console.log(formData);
  return (
    <>
      <div className="flex flex-col gap-1 ">
        <h1 className="text-[15px] font-medium text-gray-600">{label}</h1>
        <input
          type={inputType}
          value={formData[field]}
          className={`file-input ${
            isResult ? "w-full" : "w-full"
          }  h-fit p-2 bg-white text-sm border-[1px] border-gray-400 text-gray-700 focus:outline-none placeholder:text-sm`}
          placeholder={placeholder}
          onChange={(e) => {
            console.log(
              formData,
              e.target.value,
              field,
              {
                ...formData,
                [field]: e.target.value,
              },
              formData,
              formData.result
            );
            setFormData({ ...formData, [field]: e.target.value });
          }}
        />
      </div>
    </>
  );
};

export default InputComponent;
