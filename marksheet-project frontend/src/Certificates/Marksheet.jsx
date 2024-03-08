import React, { useEffect, useState } from "react";
import dateFormat from "dateformat";
import converter from "number-to-words";
const Marksheet = React.forwardRef(({ data }, ref) => {
  const [totalMarks, setTotalMarks] = useState(null);
  const {
    imgSrc,
    name,
    fatherName,
    dob,
    regNo,
    rollNo,
    course,
    year,
    firstLanguage,
    secondLanguage,
    option1,
    option2,
    option3,
    option4,
    option5,
    result: {
      lang1TheoryMarks,
      lang2TheoryMarks,
      lang1OralMarks,
      lang2OralMarks,
      opt1TheoryMarks,
      opt2TheoryMarks,
      opt3TheoryMarks,
      opt4TheoryMarks,
      opt5TheoryMarks,
      opt1OralMarks,
      opt2OralMarks,
      opt3OralMarks,
      opt4OralMarks,
      opt5OralMarks,
    },
  } = data;
  useEffect(() => {
    const theoryMarks = [
      lang1TheoryMarks,
      lang2TheoryMarks,
      opt1TheoryMarks,
      opt2TheoryMarks,
      opt3OralMarks,
      opt4OralMarks,
    ];
    const oralMarks = [
      lang1OralMarks,
      lang2OralMarks,
      opt1OralMarks,
      opt2OralMarks,
      opt3OralMarks,
      opt4OralMarks,
    ];
    if (option5) {
      oralMarks.push(opt5OralMarks);
      theoryMarks.push(opt5TheoryMarks);
    }
    const totalMarks = [];
    for (let i = 0; i < theoryMarks.length; i++) {
      let mark = parseInt(theoryMarks[i]) + parseInt(oralMarks[i]);
      totalMarks.push(mark);
    }
    setTotalMarks(totalMarks);
    return () => {
      setTotalMarks(null);
    };
  }, []);
  return (
    <div ref={ref} className="w-full h-full pt-20 px-[90px]">
      <style type="text/css" media="print">
        {
          "\
 @page { size: portrait; }\
"
        }
      </style>
      <h1 className="text-[16px] font-extrabold text-end">7168</h1>
      <div className="pt-28">
        <div className="flex flex-row justify-end px-2">
          <img src={imgSrc} alt="Student" className="w-[95px] h-[110px]" />
        </div>
        <div className="flex flex-col pt-32 items-center text-lg font-semibold font-[roboto-medium]">
          <div className="flex flex-col gap-0 items-center">
            <h1 className="text-lg font-semibold font-[roboto-medium] uppercase">
              {course}
            </h1>
            <h1 className="text-base font-semibold font-[roboto-medium]">
              June {year}
            </h1>
          </div>
          <div className="pt-10 w-full flex flex-col">
            <div className="flex flex-row w-full justify-between">
              <div className="flex flex-row gap-5">
                <div className="flex flex-col text-sm  gap-2">
                  <h1>NAME</h1>
                  <h1>FATHERS NAME</h1>
                  <h1>D.O.B</h1>
                  <h1>SCHOOL/CENTRE</h1>
                </div>
                <div className="flex flex-col  text-sm  gap-2">
                  <h1 className="uppercase">{name}</h1>
                  <h1 className="uppercase">{fatherName}</h1>
                  <h1>{dateFormat(dob, "dd mmm yyyy")}</h1>
                  <h1>Navin Bharati Senior Secondary School</h1>
                </div>
              </div>
              <div className="flex flex-row gap-5">
                <div className="flex flex-col  text-sm  gap-2">
                  <h1>REG. NO</h1>
                  <h1>ROLL NO.</h1>
                </div>
                <div className="flex flex-col  text-sm  gap-2">
                  <h1>{regNo}</h1>
                  <h1>{rollNo}</h1>
                </div>
              </div>
            </div>
            <div className="border-2 border-gray-500 mt-[6px] p-[2px]">
              <div className="flex flex-row text-xs text-center gap-[4px] ">
                <div className="flex flex-col gap-[2px] w-[6%]">
                  <h1 className="h-[58px] flex flex-col justify-center px-2 border-2 border-gray-700">
                    <h1>S.No</h1>
                  </h1>
                  <div className="border-2 border-gray-700 flex flex-col gap-2 px-4">
                    {totalMarks?.map((curr, index) => {
                      return <h1 key={index}>{index + 1}</h1>;
                    })}
                  </div>
                </div>
                <div className="flex flex-col gap-[2px] w-[33%]">
                  <h1 className="h-[58px] flex flex-col justify-center px-2 border-2 border-gray-700">
                    Subject
                  </h1>
                  <div className="border-2 border-gray-700 flex flex-col gap-2 px-0">
                    <h1>{firstLanguage}</h1>
                    <h1>{secondLanguage}</h1>
                    <h1>{option1}</h1>
                    <h1>{option2}</h1>
                    <h1>{option3}</h1>
                    <h1>
                      {course === "Secondary Examination(10th Class)"
                        ? option4
                        : `${option4} [Opt]`}
                    </h1>
                    {option5 && <h1>{option5}</h1>}
                  </div>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <div className="flex flex-col gap-[2px]">
                    <h1 className="border-2 border-gray-700">Marks Obtained</h1>
                    <div className="flex flex-row gap-[2px] w-full">
                      <div className="flex flex-col gap-[2px] w-[17%]">
                        <h1 className="border-2 border-gray-700">
                          Full <br />
                          Marks
                        </h1>
                        <div className="border-2 border-gray-700 flex flex-col gap-2">
                          {totalMarks?.map((curr, index) => {
                            return <h1 key={index}>100</h1>;
                          })}
                        </div>
                      </div>
                      <div className="flex flex-col gap-[2px] w-[17%]">
                        <h1 className="h-[36px] flex flex-col justify-center border-2 border-gray-700 ">
                          Theory
                        </h1>
                        <div className="border-2 border-gray-700 flex flex-col gap-2">
                          <h1>{lang1TheoryMarks}</h1>
                          <h1>{lang2TheoryMarks}</h1>
                          <h1>{opt1TheoryMarks}</h1>
                          <h1>{opt2TheoryMarks}</h1>
                          <h1>{opt3TheoryMarks}</h1>
                          <h1>{opt4TheoryMarks}</h1>
                          {course === "Secondary Examination(10th Class)" && (
                            <h1>{opt5TheoryMarks}</h1>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col gap-[2px] w-[17%]">
                        <h1 className="h-[36px] flex flex-col justify-center border-2 border-gray-700">
                          Oral
                        </h1>
                        <div className="border-2 border-gray-700 flex flex-col gap-2">
                          <h1>{lang1OralMarks == 0 ? "-" : lang1OralMarks}</h1>
                          <h1>{lang2OralMarks == 0 ? "-" : lang2OralMarks}</h1>
                          <h1>{opt1OralMarks == 0 ? "-" : opt1OralMarks}</h1>
                          <h1>{opt2OralMarks == 0 ? "-" : opt2OralMarks}</h1>
                          <h1>{opt3OralMarks == 0 ? "-" : opt3OralMarks}</h1>
                          <h1>{opt4OralMarks == 0 ? "-" : opt4OralMarks}</h1>
                          {course === "Secondary Examination(10th Class)" && (
                            <h1>{opt5OralMarks == 0 ? "-" : opt5OralMarks}</h1>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col gap-[2px] w-[17%]">
                        <h1 className="h-[36px] flex flex-col justify-center border-2 border-gray-700">
                          Total
                        </h1>
                        <div className="border-2 border-gray-700 flex flex-col gap-2">
                          {totalMarks?.map((curr, index) => {
                            return <h1 key={index}>{curr}</h1>;
                          })}
                        </div>
                      </div>
                      <div className="flex flex-col gap-[2px] flex-1">
                        <h1 className="h-[36px] flex flex-col justify-center border-2 border-gray-700">
                          Total in Words
                        </h1>
                        <div className="border-2 border-gray-700 flex flex-col gap-2 px-2">
                          {totalMarks?.map((curr, index) => {
                            return (
                              <h1 key={index}>{converter.toWords(curr)}</h1>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[2px] w-[8%]">
                  <h1 className="h-[58px] flex flex-col justify-center border-2 border-gray-700">
                    Grade
                  </h1>
                  <div
                    className={`border-2 
                   ${
                     course === "Secondary Examination(10th Class)"
                       ? "h-[164px]"
                       : "h-[140px]"
                   } border-gray-700 justify-center flex flex-col`}
                  >
                    <h1>A</h1>
                  </div>
                </div>
              </div>
              <div className="flex flex-row w-full text-xs font-semibold mt-[3px] gap-[3px]">
                <h1 className="py-1 border-2 border-gray-700 w-[49%] text-center">
                  Grand Total:&nbsp;
                  {totalMarks?.reduce((accum, curr) => {
                    return accum + curr;
                  }, 0)}
                </h1>
                <h1 className="py-1 border-2 border-gray-700 w-[26.5%] text-center">
                  Status: PASS
                </h1>
                <h1 className="py-1 border-2 border-gray-700 flex-1 text-center w-[20%]">
                  Percentage(%):{" "}
                  {`${
                    totalMarks?.reduce((accum, curr) => {
                      return accum + curr;
                    }, 0) / totalMarks?.length
                  }`}
                </h1>
              </div>
            </div>
            <div
              className="flex flex-col gap-0 text-[6px] font-normal mt-2"
              style={{ lineHeight: "7px" }}
            >
              <h1>
                * MARKS IN EXCESS OF THE PASS MARKS ARE ADDED TO THE TOTAL OF A
                SUCCESSFUL CANDIDATE FOR DETERMINE DIVISION
              </h1>
              <h1>** FULL MARKS: 700 PASS MARKS: 231</h1>
              <h1>*** AB: ABSENT IN THE SUBJECT</h1>
              <h1>WWW.CSSE.CO.IN</h1>
            </div>
            <h1 className="text-[16px] font-extrabold pt-24 px-28">
              16 Jun 2014
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Marksheet;
