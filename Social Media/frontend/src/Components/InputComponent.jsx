import React from "react";

const InputComponent = ({
  label,
  inputType,
  placeholder,
  field,
  formData,
  setFormData,
}) => {
  return (
    <>
      <div className="flex flex-col gap-1">
        <h1 className="text-[15px] font-semibold text-ascent-2">{label}</h1>
        <input
          type={inputType}
          placeholder={placeholder}
          className="text-sm font-medium outline-none p-2 py-3 rounded-md bg-zinc-700 placeholder:text-gray-400 text-gray-300 w-full"
          onChange={(e) =>
            setFormData({ ...formData, [field]: e.target.value })
          }
        />
      </div>
    </>
  );
};

export default InputComponent;
