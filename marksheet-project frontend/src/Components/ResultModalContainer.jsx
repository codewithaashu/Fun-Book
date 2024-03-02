import React from "react";
import InputComponent from "./InputComponent";

const ResultModalContainer = ({ formData, setFormData }) => {
  const handleModalBtn = () => {
    console.log(formData);
  };
  const subjects = [
    "Hindi",
    "English",
    "History",
    "Geography",
    "Mathematics",
    "Life Science",
    "Physical Science",
  ];
  return (
    <dialog id="my_modal_4" className="modal ">
      <div className="modal-box w-11/12 max-w-5xl">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div className=" bg-white p-5 md:p-7 rounded-md flex flex-col gap-4 shadow-md mb-3 mt-7 ">
          <div className="grid grid-cols-4 justify-between w-full">
            <h1 className="col-span-1 text-base font-semibold text-gray-700">
              Reg. No. :
              <span className="px-2 font-medium text-gray-600">
                {formData.regNo}
              </span>
            </h1>
            <h1 className="col-span-1 text-base font-semibold text-gray-700">
              Name :
              <span className="px-2 font-medium text-gray-600">
                {formData.name}
              </span>
            </h1>
            <h1 className="col-span-1 text-base font-semibold text-gray-700">
              Father Name :
              <span className="px-2 font-medium text-gray-600">
                {formData.fatherName}
              </span>
            </h1>
            <h1 className="col-span-1 text-base font-semibold text-gray-700">
              Roll No. :
              <span className="px-2 font-medium text-gray-600">
                {formData.rollNo}
              </span>
            </h1>
          </div>
          <hr />
          <div className="w-full grid grid-cols-2 gap-5 ">
            {subjects.map((curr, index) => {
              return (
                <InputComponent
                  label={`${curr} Marks`}
                  key={index}
                  placeholder={`Enter ${curr} Marks`}
                  inputType={"text"}
                  isResult={true}
                  field={`subject${index + 1}Marks`}
                  formData={formData}
                  setFormData={setFormData}
                />
              );
            })}
          </div>
        </div>
        <div className="modal-action">
          <form method="dialog">
            <button
              className=" bg-black text-white px-7 text-base py-2"
              onClick={handleModalBtn}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default ResultModalContainer;
