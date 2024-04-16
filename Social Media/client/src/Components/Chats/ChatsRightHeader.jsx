import React from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
const ChatsRightHeader = () => {
  return (
    <>
      <div className="w-full bg-zinc-950 text-white rounded-t-lg shadow-xl p-4 py-3 flex flex-col gap-2 border-b-[1px] border-zinc-900">
        <div className="flex justify-between items-center">
          <div className="flex flex-row gap-3">
            <div className="relative w-fit">
              <img
                src="http://res.cloudinary.com/dycobmjyk/image/upload/v1713092084/Social%20Media/sqvmzi5tfi4eaarxemde.jpg"
                alt="User"
                className="w-11 h-11 rounded-full object-cover"
              />
              <p className="w-[10px] h-[10px] bg-green-600 rounded-full absolute bottom-0 right-0"></p>
            </div>
            <div className="flex flex-col gap-[1px] text-gray-100">
              <h1 className="text-[15px] font-semibold">Ashish Ranjan</h1>
              <p className="text-xs text-ascent-2 font-semibold">Online</p>
            </div>
          </div>
          <div className="flex flex-row gap-5 text-2xl text-gray-200">
            <IoInformationCircleOutline className="cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatsRightHeader;
