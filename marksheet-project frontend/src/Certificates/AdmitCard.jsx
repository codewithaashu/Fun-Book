import React from "react";

const AdmitCard = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="w-full h-full pt-[66px] px-[90px]">
      <style type="text/css" media="print">
        {
          "\
 @page { size: portrait; }\
"
        }
      </style>
      <h1 className="text-[16px] font-extrabold text-end">7168</h1>
      <div className="pt-24">
        <div className="flex flex-row justify-end px-2">
          <img
            src="https://i.pinimg.com/236x/6b/7e/d6/6b7ed698713c09ad9e6afc7dcb996a09.jpg"
            alt="Student"
            className="w-[95px] h-[110px]"
          />
        </div>
        <div className="flex flex-col pt-[72px]  text-lg font-semibold font-[roboto-medium]">
          <div className="grid grid-cols-2 w-full gap-40">
            <div className="flex flex-row items-center gap-8">
              <h1 className="font-[roboto-medium] text-base">
                Registration <br /> No.
              </h1>
              <h1 className="text-lg font-semibold font-[roboto-medium]">
                SE20130625
              </h1>
            </div>
            <div className="flex flex-row items-center gap-8">
              <h1 className="text-base font-[roboto-medium]">Roll No.</h1>
              <h1 className="text-lg font-semibold font-[roboto-medium]">
                2477
              </h1>
            </div>
          </div>
          <div className="flex flex-row pt-12 w-full gap-8 justify-start">
            <div className="flex flex-col gap-3 ">
              <h1 className="text-base font-normal ">CANDIDATE NAME</h1>
              <h1 className="text-base font-normal">DATE OF BIRTH</h1>
              <h1 className="text-base font-normal">SEX</h1>
              <h1 className="text-base font-normal">FATHER'S NAME</h1>
              <h1 className="text-base font-normal">CENTRE NAME</h1>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-lg font-semibold font-[roboto-medium] uppercase">
                Baburam Ralapuri
              </h1>
              <h1 className="text-lg font-semibold font-[roboto-medium] uppercase">
                15 May 1972
              </h1>
              <h1 className="text-lg font-semibold font-[roboto-medium] uppercase">
                Male
              </h1>
              <h1 className="text-lg font-semibold font-[roboto-medium] uppercase">
                Apparao
              </h1>
              <h1 className="text-lg font-semibold font-[roboto-medium] ">
                Navin Bharti Senior Secondary School
              </h1>
            </div>
          </div>
          <div className="mt-16 border-2 border-gray-500 flex flex-col  w-full p-[2px]">
            <h1 className="border-2 border-gray-700 text-center text-base font-semibold font-[roboto-medium] mb-[2px]">
              SUBJECTS
            </h1>
            <div
              className="grid gap-[2px]"
              style={{ gridTemplateColumns: "50% 20% 29.3%" }}
            >
              <h1 className="uppercase text-sm font-semibold font-[roboto-medium] border-2 border-gray-700 text-center">
                Kannada
              </h1>
              <h1 className="uppercase text-sm font-semibold font-[roboto-medium]  border-2 border-gray-700 text-center">
                English
              </h1>
              <h1 className="uppercase text-sm font-semibold font-[roboto-medium]  border-2 border-gray-700 text-center">
                Hindi
              </h1>
              <h1 className="uppercase text-sm font-semibold font-[roboto-medium]  border-2 border-gray-700 text-center">
                Mathematics
              </h1>
              <h1 className="uppercase text-sm font-semibold font-[roboto-medium]  border-2 border-gray-700 text-center">
                Science
              </h1>
              <h1 className="uppercase text-sm font-semibold font-[roboto-medium]  border-2 border-gray-700 text-center">
                Social Science
              </h1>
              <h1 className="uppercase text-sm font-semibold font-[roboto-medium]  border-2 border-gray-700 text-center">
                Computer Science
              </h1>
              <h1 className="uppercase text-sm font-semibold font-[roboto-medium]  border-2 border-gray-700 text-center border-r-0">
                &nbsp;
              </h1>
              <h1 className="uppercase text-sm font-semibold font-[roboto-medium]  border-2 border-gray-700 text-center border-l-0">
                &nbsp;
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default AdmitCard;
