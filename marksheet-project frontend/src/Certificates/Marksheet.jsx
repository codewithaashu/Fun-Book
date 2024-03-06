import React from "react";

const Marksheet = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="w-full h-full pt-16 px-20">
      <h1 className="text-[16px] font-extrabold text-end">7168</h1>
      <div className="pt-32">
        <div className="flex flex-row justify-end px-2">
          <img
            src="https://i.pinimg.com/236x/6b/7e/d6/6b7ed698713c09ad9e6afc7dcb996a09.jpg"
            alt="Student"
            className="w-[95px] h-[110px]"
          />
        </div>
        <div className="flex flex-col pt-32 items-center text-lg font-semibold font-[roboto-medium]">
          <div className="flex flex-col gap-0 items-center">
            <h1 className="text-lg font-semibold font-[roboto-medium]">
              SR. SECONDARY EXAMINATION(12TH CLASS)
            </h1>
            <h1 className="text-base font-semibold font-[roboto-medium]">
              June 2014
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
                  <h1>MANVA SHANAVAZ</h1>
                  <h1>SALIMBHAI</h1>
                  <h1>21 Jan 1997</h1>
                  <h1>Navin Bharati Senior Secondary School</h1>
                </div>
              </div>
              <div className="flex flex-row gap-5">
                <div className="flex flex-col  text-sm  gap-2">
                  <h1>REG. NO</h1>
                  <h1>ROLL NO.</h1>
                </div>
                <div className="flex flex-col  text-sm  gap-2">
                  <h1>HS20140588</h1>
                  <h1>2209</h1>
                </div>
              </div>
            </div>
            <div className="border-2 border-gray-500 mt-[6px] p-[2px]">
              <div className="flex flex-row text-xs text-center gap-[3px] ">
                <div className="flex flex-col gap-[2px]">
                  <h1 className="h-[58px] flex flex-col justify-center px-2 border-2 border-gray-700">
                    <h1>S.No</h1>
                  </h1>
                  <div className="border-2 border-gray-700 flex flex-col gap-2 px-4">
                    <h1>01</h1>
                    <h1>02</h1>
                    <h1>03</h1>
                    <h1>04</h1>
                    <h1>05</h1>
                    <h1>06</h1>
                  </div>
                </div>
                <div className="flex flex-col gap-[2px]">
                  <h1 className="h-[58px] flex flex-col justify-center px-2 border-2 border-gray-700">
                    Subject
                  </h1>
                  <div className="border-2 border-gray-700 flex flex-col gap-2 px-4">
                    <h1>HINDI</h1>
                    <h1>ENGLISH</h1>
                    <h1>ACCOUNTANCY</h1>
                    <h1>BUSINESS ORGANISATION</h1>
                    <h1>BUSINESS STUDIES0</h1>
                    <h1>BUSINESS MATH [Opt]</h1>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col gap-[2px]">
                    <h1 className="border-2 border-gray-700">Marks Obtained</h1>
                    <div className="flex flex-row gap-[2px]">
                      <div className="flex flex-col gap-[2px]">
                        <h1 className=" px-2 border-2 border-gray-700">
                          Full <br />
                          Marks
                        </h1>
                        <div className="border-2 border-gray-700 flex flex-col gap-2 px-4">
                          <h1>100</h1>
                          <h1>100</h1>
                          <h1>100</h1>
                          <h1>100</h1>
                          <h1>100</h1>
                          <h1>100</h1>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[2px]">
                        <h1 className="h-[36px] flex flex-col justify-center px-2 border-2 border-gray-700 ">
                          Theory
                        </h1>
                        <div className="border-2 border-gray-700 flex flex-col gap-2 px-4">
                          <h1>63</h1>
                          <h1>74</h1>
                          <h1>71</h1>
                          <h1>65</h1>
                          <h1>69</h1>
                          <h1>75</h1>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[2px]">
                        <h1 className="h-[36px] flex flex-col justify-center px-2 border-2 border-gray-700">
                          Oral
                        </h1>
                        <div className="border-2 border-gray-700 flex flex-col gap-2 px-4">
                          <h1>-</h1>
                          <h1>-</h1>
                          <h1>-</h1>
                          <h1>-</h1>
                          <h1>-</h1>
                          <h1>-</h1>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[2px]">
                        <h1 className="h-[36px] flex flex-col justify-center px-2 border-2 border-gray-700">
                          Total
                        </h1>
                        <div className="border-2 border-gray-700 flex flex-col gap-2 px-4">
                          <h1>63</h1>
                          <h1>74</h1>
                          <h1>71</h1>
                          <h1>65</h1>
                          <h1>69</h1>
                          <h1>75</h1>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[2px]">
                        <h1 className="h-[36px] flex flex-col justify-center px-2 border-2 border-gray-700">
                          Total in Words
                        </h1>
                        <div className="border-2 border-gray-700 flex flex-col gap-2 px-3">
                          <h1>sixty-three</h1>
                          <h1>seventy-four</h1>
                          <h1>seventy-one</h1>
                          <h1>sixty-five</h1>
                          <h1>sixty-nine</h1>
                          <h1>seventy-five</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[2px]">
                  <h1 className="h-[58px] flex flex-col justify-center px-4 border-2 border-gray-700">
                    Grade
                  </h1>
                  <div
                    className="border-2 
                  h-[140px] border-gray-700 justify-center flex flex-col px-2"
                  >
                    <h1>A</h1>
                  </div>
                </div>
              </div>
              <div className="flex flex-row w-full text-xs font-semibold mt-[3px] gap-[3px]">
                <h1 className="py-1 border-2 border-gray-700 w-[48%] text-center">
                  Grand Total: 417
                </h1>
                <h1 className="py-1 border-2 border-gray-700 w-[24%] text-center">
                  Status: PASS
                </h1>
                <h1 className="py-1 border-2 border-gray-700 flex-1 text-center">
                  Percentage(%): 69.50
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
            <h1 className="text-[16px] font-extrabold pt-12 px-40">
              16 Jun 2014
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Marksheet;
