import React, { useEffect, useState } from "react";
import years from "../DB/Years";
import {
  Languages,
  artsSubjects,
  commerceSubjects,
  scienceSubjects,
  secondoryOptionalSubjects,
} from "../DB/SubjectsDB";
import InputComponent from "./InputComponent";
import SelectComponent from "./SelectComponent";
import SelectCourse from "./SelectCourse";
import courses from "../DB/CoursesDB";
import StreamComponent from "./StreamComponent";
import streams from "../DB/StreamDB";
import LanguageComponent from "./LanguageComponent";
import OptionalSubjectComponent from "./OptionalSubjectComponent";

const StudentRegistrationContainer = () => {
  const [course, setCourse] = useState(null);
  const [stream, setStream] = useState(null);
  const [formData, setFormData] = useState({
    imgSrc: "",
    name: "",
    dob: "",
    fatherName: "",
    motherName: "",
    year: "",
    course: "",
    stream: "",
    firstLanguage: "",
    secondLanguage: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    option5: "",
  });
  useEffect(() => {
    seniorSecondary();
  }, [stream]);
  const seniorSecondary = () => {
    if (stream === "Science") {
      return (
        <OptionalSubjectComponent
          formData={formData}
          setFormData={setFormData}
          secondoryOptionalSubjects={scienceSubjects}
          seniorSecondary={true}
          stream={stream}
        />
      );
    } else if (stream === "Commerce") {
      return (
        <OptionalSubjectComponent
          formData={formData}
          setFormData={setFormData}
          secondoryOptionalSubjects={commerceSubjects}
          seniorSecondary={true}
          stream={stream}
        />
      );
    }
    return (
      <OptionalSubjectComponent
        formData={formData}
        setFormData={setFormData}
        secondoryOptionalSubjects={artsSubjects}
        seniorSecondary={true}
        stream={stream}
      />
    );
  };
  const handleSubmit = () => {
    setFormData({
      imgSrc: "",
      name: "",
      dob: "",
      fatherName: "",
      motherName: "",
      year: "",
      course: "",
      stream: "",
      firstLanguage: "",
      secondLanguage: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      option5: "",
    });
    setCourse(null);
    setStream(null);
    console.log(formData);
  };
  return (
    <>
      <div className="p-5 flex flex-col gap-5 ">
        <h1 className="text-lg font-semibold text-gray-600">
          Registration Form
        </h1>
        <div className=" bg-white p-5 md:p-7 rounded-md flex flex-col gap-4  shadow-md mb-3 mt-3 ">
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
          <SelectCourse
            label="Courses"
            data={courses}
            defaultValue="Select Course"
            setCourse={setCourse}
            field={"course"}
            setFormData={setFormData}
            formData={formData}
          />
          {course ? (
            course === "SR. Secondary Examination(12th Class)" ? (
              <>
                <StreamComponent
                  label="Stream"
                  data={streams}
                  defaultValue="Select Stream"
                  setStream={setStream}
                  stream={stream}
                  field={"stream"}
                  setFormData={setFormData}
                  formData={formData}
                />
                {stream && (
                  <>
                    <LanguageComponent
                      formData={formData}
                      setFormData={setFormData}
                    />
                    {seniorSecondary()}
                  </>
                )}
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
            )
          ) : null}

          <button
            className="btn btn-outline btn-primary px-7 py-1 w-fit self-center mt-3 "
            onClick={handleSubmit}
          >
            Register Student
          </button>
        </div>
      </div>
    </>
  );
};

export default StudentRegistrationContainer;
