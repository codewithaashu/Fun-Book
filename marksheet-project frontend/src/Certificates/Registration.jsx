import React, { useEffect } from "react";

const Registration = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="w-full h-full pt-[60px] px-32">
      <style type="text/css" media="print">
        {
          "\
         @page { size: landscape; }\
      "
        }
      </style>
      ;<h1 className="text-[16px] font-extrabold text-end px-6">7168</h1>
      <div className="pt-80 ">
        <div className="text-sm font-semibold">
          Certify that
          <span className="text-base font-bold uppercase px-[5px]">
            Baburam Ralapuri
          </span>
          S/D/W of Shri
          <span className="text-base font-bold uppercase px-[5px]">Apparo</span>
          has been Registered in Secondary CSSE under The Provision of Relevent
          Regulations,His/Her Registration No. is
          <span className="text-base font-bold uppercase px-[5px]">
            SE20130625
          </span>
          <h1 className="py-3 text-base font-bold uppercase text-center">
            Subjects
          </h1>
          <div className="border-2 border-gray-500  w-full pt-[2px] pb-[2px]">
            <div className="uppercase text-sm font-semibold  border-2 border-gray-700 text-center">
              Kannada, English, Hindi, Mathematics, Science, Social Science,
              Computer Science
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-[17px] font-extrabold pt-36 px-16">15 Jun 2013</h1>
    </div>
  );
});

export default Registration;
