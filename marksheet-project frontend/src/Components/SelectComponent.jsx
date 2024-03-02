import React from "react";

const SelectComponent = ({
  label,
  data,
  defaultValue,
  field,
  formData,
  setFormData,
}) => {
  return (
    <>
      <div className="flex flex-col gap-1 ">
        <h1 className="text-base font-medium text-gray-500">{label}</h1>
        <select
          className="select  w-full  h-fit p-2 bg-white text-base border-[1px] border-gray-400 outline-none rounded-sm text-gray-700 focus:outline-none"
          defaultValue={formData.year}
          onChange={(e) =>
            setFormData({ ...formData, [field]: e.target.value })
          }
        >
          <option disabled value={""}>
            {defaultValue}
          </option>
          {data.map((curr, index) => {
            return (
              <option value={curr} key={index}>
                {curr}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default SelectComponent;
