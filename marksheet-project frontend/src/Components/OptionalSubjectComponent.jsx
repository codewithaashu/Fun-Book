import React, { useEffect, useState } from "react";
import Select from "react-select";
const OptionalSubjectComponent = ({
  formData,
  setFormData,
  secondoryOptionalSubjects,
  seniorSecondary,
  stream,
}) => {
  const [options, setOptions] = useState(secondoryOptionalSubjects);
  useEffect(() => {
    setOptions(secondoryOptionalSubjects);
  }, [stream]);
  return (
    <>
      <div className="w-full flex flex-row justify-between">
        <div className="flex flex-col gap-1 w-1/2">
          <h1 className="text-base font-medium text-gray-500">
            Option1 Subject
          </h1>
          {console.log(formData)}
          <Select
            options={options}
            menuPlacement="top"
            defaultInputValue={formData.option1}
            onChange={(v) => {
              setFormData({
                ...formData,
                option1: v.value,
              });
              setOptions(options.filter((o1) => o1.value !== v.value));
            }}
            className="w-full max-w-xs bg-white text-[14px] border-gray-400 outline-none rounded-sm text-gray-700 "
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
        <div className="flex flex-col gap-1 w-1/2">
          <h1 className="text-base font-medium text-gray-500">
            Option2 Subject
          </h1>
          <Select
            options={options}
            defaultInputValue={formData.option2}
            menuPlacement="top"
            onChange={(v) => {
              setFormData({
                ...formData,
                option2: v.value,
              });
              setOptions(options.filter((o1) => o1.value !== v.value));
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
      <div className="w-full flex flex-row justify-between">
        <div className="flex flex-col gap-1 w-1/2">
          <h1 className="text-base font-medium text-gray-500">
            Option3 Subject
          </h1>
          <Select
            options={options}
            defaultInputValue={formData.option3}
            menuPlacement="top"
            onChange={(v) => {
              setFormData({
                ...formData,
                option3: v.value,
              });
              setOptions(options.filter((o1) => o1.value !== v.value));
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
        <div className="flex flex-col gap-1 w-1/2">
          <h1 className="text-base font-medium text-gray-500">
            Option4 Subject
          </h1>
          <Select
            options={options}
            defaultInputValue={formData.option4}
            menuPlacement="top"
            onChange={(v) => {
              setFormData({
                ...formData,
                option4: v.value,
              });
              setOptions(options.filter((o1) => o1.value !== v.value));
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
      {!seniorSecondary && (
        <div className="w-full flex flex-row justify-between">
          <div className="flex flex-col gap-1 w-1/2">
            <h1 className="text-base font-medium text-gray-500">
              Option5[Optional] Subject
            </h1>
            <Select
              options={options}
              defaultInputValue={formData.option5}
              menuPlacement="top"
              onChange={(v) => {
                setFormData({
                  ...formData,
                  option5: v.value,
                });
                setOptions(options.filter((o1) => o1.value !== v.value));
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
      )}
    </>
  );
};

export default OptionalSubjectComponent;
