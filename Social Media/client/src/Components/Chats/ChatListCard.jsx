import React from "react";

const ChatListCard = () => {
  return (
    <>
      <div className="flex flex-row gap-3 items-center cursor-pointer hover:bg-[#090455] p-[10px] rounded-lg">
        <div className="relative w-fit">
          <img
            src="http://res.cloudinary.com/dycobmjyk/image/upload/v1713092084/Social%20Media/sqvmzi5tfi4eaarxemde.jpg"
            alt="User"
            className="w-9 h-9 rounded-full object-cover"
          />
          <p className="w-[10px] h-[10px] bg-green-600 rounded-full absolute bottom-0 right-0"></p>
        </div>
        <div className="flex flex-col gap-[1px]">
          <h1 className="text-sm font-semibold text-gray-200">Ashish Ranjan</h1>
          <p className="text-xs text-gray-500 font-semibold ">Kaise ho</p>
        </div>
      </div>
    </>
  );
};

export default ChatListCard;
