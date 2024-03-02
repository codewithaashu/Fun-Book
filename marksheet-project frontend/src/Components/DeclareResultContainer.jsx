import React, { useState } from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import courses from "../DB/CoursesDB";
import InputComponent from "./InputComponent";

const DeclareResultContainer = () => {
  const subjects = [
    "Hindi",
    "English",
    "History",
    "Geography",
    "Mathematics",
    "Life Science",
    "Physical Science",
  ];
  const [formData, setFormData] = useState({
    class: "",
    student: "",
    subject1Marks: "",
    subject2Marks: "",
    subject3Marks: "",
    subject4Marks: "",
    subject5Marks: "",
    subject6Marks: "",
    subject7Marks: "",
  });
  const handleDeclareResult = () => {
    setFormData({
      class: "",
      student: "",
      subject1Marks: "",
      subject2Marks: "",
      subject3Marks: "",
      subject4Marks: "",
      subject5Marks: "",
      subject6Marks: "",
      subject7Marks: "",
    });
    console.log(formData);
  };
  return (
    <div className="p-5 flex flex-col gap-5">
      <h1 className="text-lg font-semibold text-gray-600">Declare Result</h1>
      <div className=" bg-white p-5 md:p-7 rounded-md flex flex-col gap-5  shadow-md mb-3 mt-3 ">
        <div className="flex flex-row items-center justify-between px-3">
          <h1 className="text-base font-medium text-gray-600 px-5 w-fit">
            Class
          </h1>
          <select
            className="select select-bordered w-10/12  bg-white text-gray-800 font-normal focus:outline-none"
            onChange={(e) =>
              setFormData({ ...formData, class: e.target.value })
            }
            defaultValue={1}
          >
            <option disabled value={1}>
              Select Your Class
            </option>
            {courses.map((curr, index) => {
              return (
                <option value={curr} key={index}>
                  {curr}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex flex-row items-center justify-between px-3">
          <h1 className="text-base font-medium text-gray-600 px-5 w-fit">
            Student Name
          </h1>
          <select
            className="select select-bordered w-10/12  bg-white text-gray-800 font-normal focus:outline-none"
            onChange={(e) =>
              setFormData({ ...formData, student: e.target.value })
            }
            defaultValue={1}
          >
            <option disabled value={1}>
              Select Student
            </option>
            {courses.map((curr, index) => {
              return (
                <option value={curr} key={index}>
                  {curr}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex flex-row  justify-between px-3">
          <h1 className="text-base font-medium text-gray-600 px-5 w-fit pt-5">
            Subjects
          </h1>
          <div className="flex flex-col gap-4 w-10/12">
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
        <button
          className="px-10 py-2 text-white bg-blue w-fit self-center rounded-sm mt-5 text-base font-medium"
          onClick={handleDeclareResult}
        >
          Declare Result
        </button>
      </div>
    </div>
  );
};

export default DeclareResultContainer;
