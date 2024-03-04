import React, { useRef, useState } from "react";
import courses from "../DB/CoursesDB";
import InputComponent from "./InputComponent";
import Select from "react-select";
import ErrorToast from "../utility/ErrorToast";
import axios from "axios";
import SentenceCase from "../utility/SentenceCase";
import SuccessToast from "../utility/SuccesToast";
import CheckEmptyField from "../utility/CheckEmptyField";
import WarningToast from "../utility/WarningToast";
const DeclareResultContainer = () => {
  const resultInputRef = useRef();
  const [course, setCourse] = useState(null);
  const [studentID, setStudentID] = useState(null);
  const [studentsList, setStudentsList] = useState(null);
  const [formData, setFormData] = useState(null);
  const handleDeclareResult = async () => {
    try {
      const { isAllFieldFilled } = CheckEmptyField({
        ...formData,
        option5: "optional",
      });
      if (!course || !studentID || !isAllFieldFilled) {
        WarningToast("Please fill all the fields");
        return;
      }
      const { data } = await axios.post(
        `${process.env.REACT_APP_SERVER_BASE_URL}/api/result/${studentID}`,
        formData
      );
      if (data.success) {
        SuccessToast(data.message);
        resultInputRef.current.value = "";
        setCourse(null);
        setStudentID(null);
      } else {
        ErrorToast(data.message);
      }
    } catch (err) {
      ErrorToast("Server  error. Please try again later.");
    }
  };
  const handleSelectCourse = async (val) => {
    try {
      setCourse(val);
      const course =
        val === "Secondary Examination(10th Class)"
          ? "Secondary"
          : "HigherSecondary";
      const {
        data: { data },
      } = await axios.get(
        `${process.env.REACT_APP_SERVER_BASE_URL}/api/courseStudent/${course}`
      );
      const newArr = data.map((curr, index) => {
        return {
          value: curr,
          label: `${curr.regNo}, ${curr.name}`.toString(),
        };
      });
      setStudentsList(newArr);
    } catch (err) {
      ErrorToast("Server Error. Try again later.");
    }
  };
  const handleSelectStudent = (v) => {
    setStudentID(v._id);
    let subjects = [
      v.firstLanguage.trim(),
      v.secondLanguage.trim(),
      v.option1.trim(),
      v.option2.trim(),
      v.option3.trim(),
      v.option4.trim(),
    ];
    if (v.option5) {
      subjects.push(v.option5.trim());
    }
    setFormData({
      ...subjects.reduce((accumulator, value) => {
        return { ...accumulator, [value]: "" };
      }, {}),
    });
  };
  return (
    <div className="p-5 flex flex-col gap-5">
      <h1 className="text-lg font-semibold text-gray-600">Declare Result</h1>
      <div className=" bg-white p-5 md:p-7 rounded-md flex flex-col gap-5  shadow-md mb-3 mt-3 ">
        <div className="flex flex-row items-center justify-between px-3">
          <h1 className="text-base font-medium text-gray-600 px-5 w-fit">
            Course
          </h1>
          <select
            className="select select-bordered w-10/12  bg-white text-gray-800 font-normal focus:outline-none"
            defaultValue={""}
            onChange={(e) => handleSelectCourse(e.target.value)}
            ref={resultInputRef}
          >
            <option disabled value={""}>
              Select Your Course
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
        {course &&
          (!studentsList ? (
            <div className="self-center ">
              <span className="loading loading-spinner loading-lg bg-red-500"></span>
            </div>
          ) : (
            <>
              <div className="flex flex-row items-center justify-between px-3">
                <h1 className="text-base font-medium text-gray-600 px-5 w-fit">
                  Student Name
                </h1>
                <Select
                  options={studentsList}
                  placeholder="Select Student"
                  menuPlacement="top"
                  onChange={(v) => handleSelectStudent(v.value)}
                  className="w-10/12  bg-white  text-[14px]  border-gray-400 outline-none rounded-sm text-gray-700 "
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
              {studentID && (
                <div className="flex flex-row  justify-between px-3">
                  <h1 className="text-base font-medium text-gray-600 px-5 w-fit pt-5">
                    Subjects
                  </h1>
                  <div className="flex flex-col gap-4 w-10/12">
                    {Object.keys(formData).map((elem, index) => {
                      const curr = SentenceCase(elem);
                      return (
                        <InputComponent
                          label={`${curr} Marks`}
                          key={index}
                          placeholder={`Enter ${curr} Marks`}
                          inputType={"text"}
                          isResult={true}
                          field={elem}
                          formData={formData}
                          setFormData={setFormData}
                        />
                      );
                    })}
                  </div>
                </div>
              )}
            </>
          ))}
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
