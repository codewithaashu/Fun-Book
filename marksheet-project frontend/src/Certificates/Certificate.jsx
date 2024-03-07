import React from "react";

const Certificate = React.forwardRef((props, ref) => {
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
      <div className="pt-[350px]">
        <div className="flex flex-col w-full gap-1 justify-start text-lg">
          <div className="text-[15px] font-semibold">
            This is to certify that
            <span className="text-[16px] font-bold  uppercase px-2">
              Baburam Ralapuri
            </span>
          </div>
          <div className="text-[15px] font-semibold">
            Roll No.
            <span className="text-[15px] font-bold uppercase px-[102px]">
              2477
            </span>
          </div>
          <div className="text-[15px] font-semibold">
            Registration No.
            <span className="text-[15px] font-bold uppercase px-10">
              SE20130625
            </span>
          </div>
          <div className="text-[15px] font-semibold">
            Son/Daughter of Shri.
            <span className="text-[15px] font-bold uppercase px-2">
              Apparao
            </span>
          </div>
          <div className="text-[15px] font-semibold">
            Born on
            <span className="text-[15px] font-bold uppercase px-3">
              15 May 1972
            </span>
          </div>
          <div className="text-[15px] font-semibold">
            passed the Secondary School Examination of the Board held in
            <span className="text-[15px] font-bold px-3">Jun 2013</span>
          </div>
          <div className="text-[15px] font-semibold">
            from
            <span className="text-[15px] font-bold px-3">
              Navin Bharti Senior Secondary School
            </span>
          </div>
          <div className="text-[15px] font-semibold">
            in the following subjects:
          </div>
        </div>
        <div className="mt-2 border-2 border-gray-500 flex flex-col  w-full pt-[2px] pb-[2px]">
          <div
            className="grid gap-[2px]"
            style={{ gridTemplateColumns: "50% 20% 29%" }}
          >
            <h1 className="uppercase text-[15px] font-bold  border-2 border-gray-700 text-center">
              Kannada
            </h1>
            <h1 className="uppercase text-[15px] font-bold  border-2 border-gray-700 text-center">
              English
            </h1>
            <h1 className="uppercase text-[15px] font-bold  border-2 border-gray-700 text-center">
              Hindi
            </h1>
            <h1 className="uppercase text-[15px] font-bold  border-2 border-gray-700 text-center">
              Mathematics
            </h1>
            <h1 className="uppercase text-[15px] font-bold  border-2 border-gray-700 text-center">
              Science
            </h1>
            <h1 className="uppercase text-[15px] font-bold  border-2 border-gray-700 text-center">
              Social Science
            </h1>
            <h1 className="uppercase text-[15px] font-bold  border-2 border-gray-700 text-center">
              Computer Science
            </h1>
            <h1 className="uppercase text-[15px] font-bold  border-2 border-gray-700 text-center border-r-0">
              &nbsp;
            </h1>
            <h1 className="uppercase text-[15px] font-bold  border-2 border-gray-700 text-center border-l-0">
              &nbsp;
            </h1>
          </div>
        </div>
      </div>
      <h1 className="text-[17px] font-extrabold pt-52 px-32">15 Jun 2013</h1>
    </div>
  );
});

export default Certificate;
