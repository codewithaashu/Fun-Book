import React, { useState } from "react";
import InputComponent from "./InputComponent";
import SelectComponent from "./SelectComponent";
import years from "../DB/Years";
import LanguageComponent from "./LanguageComponent";
import OptionalSubjectComponent from "./OptionalSubjectComponent";
import {
  artsSubjects,
  commerceSubjects,
  scienceSubjects,
  secondoryOptionalSubjects,
} from "../DB/SubjectsDB";
const EditModalContainer = ({ formData, setFormData }) => {
  const seniorSecondary = () => {
    if (formData.stream === "Science") {
      return (
        <OptionalSubjectComponent
          formData={formData}
          setFormData={setFormData}
          secondoryOptionalSubjects={scienceSubjects}
          seniorSecondary={true}
          stream={formData.stream}
        />
      );
    } else if (formData.stream === "Commerce") {
      return (
        <OptionalSubjectComponent
          formData={formData}
          setFormData={setFormData}
          secondoryOptionalSubjects={commerceSubjects}
          seniorSecondary={true}
          stream={formData.stream}
        />
      );
    }
    return (
      <OptionalSubjectComponent
        formData={formData}
        setFormData={setFormData}
        secondoryOptionalSubjects={artsSubjects}
        seniorSecondary={true}
        stream={formData.stream}
      />
    );
  };
  const handleModalBtn = () => {
    console.log(formData);
  };

  return (
    <>
      <dialog id="my_modal_4" className="modal ">
        <div className="modal-box w-11/12 max-w-5xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className=" bg-white p-5 md:p-7 rounded-md flex flex-col gap-4  shadow-md mb-3 mt-7 ">
            <InputComponent
              label="Student Photo"
              inputType="file"
              placeholder="Choose Image"
              field={"imgSrc"}
              formData={formData}
              setFormData={setFormData}
            />
            <InputComponent
              label="Student Name"
              inputType="text"
              placeholder="Enter Student Name"
              field={"name"}
              formData={formData}
              setFormData={setFormData}
            />
            <InputComponent
              label="Date of Birth"
              inputType="date"
              placeholder="Enter Date of Birth"
              field={"dob"}
              formData={formData}
              setFormData={setFormData}
            />
            <InputComponent
              label="Father Name"
              inputType="text"
              placeholder="Enter Student's Father Name"
              field={"fatherName"}
              formData={formData}
              setFormData={setFormData}
            />
            <InputComponent
              label="Mother Name"
              inputType="text"
              placeholder="Enter Student's Mother Name"
              field={"motherName"}
              formData={formData}
              setFormData={setFormData}
            />

            <SelectComponent
              label="Year"
              data={years}
              defaultValue="Select Registration Year"
              field={"year"}
              setFormData={setFormData}
              formData={formData}
            />
            {formData.course === "SR. Secondary Examination(12th Class)" ? (
              <>
                {console.log(formData)}
                <LanguageComponent
                  formData={formData}
                  setFormData={setFormData}
                />
                {seniorSecondary()}
              </>
            ) : (
              <>
                <LanguageComponent
                  formData={formData}
                  setFormData={setFormData}
                />
                <OptionalSubjectComponent
                  formData={formData}
                  setFormData={setFormData}
                  secondoryOptionalSubjects={secondoryOptionalSubjects}
                  seniorSecondary={false}
                />
              </>
            )}
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
    </>
  );
};

export default EditModalContainer;
