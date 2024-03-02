import React from "react";

const StreamComponent = ({
  label,
  data,
  defaultValue,
  setStream,
  field,
  setFormData,
  formData,
}) => {
  return (
    <div className="flex flex-col gap-1 ">
      <h1 className="text-base font-medium text-gray-500">{label}</h1>
      <select
        className="select  w-full max-w-xs h-fit p-2 bg-white text-base border-[1px] border-gray-400 outline-none rounded-sm text-gray-700 focus:outline-none"
        defaultValue={1}
        onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
      >
        <option disabled value={1}>
          {defaultValue}
        </option>
        {data.map((curr, index) => {
          return (
            <option value={curr} onClick={() => setStream(curr)} key={curr}>
              {curr}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default StreamComponent;
