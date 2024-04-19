import React from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const ChatsRightHeader = () => {
  const navigate = useNavigate("");
  //get onlineUsers list
  const { onlineUser } = useSelector((state) => state.chat);
  //get selected chat user  details
  const { firstName, lastName, profileUrl, _id } = useSelector(
    (state) => state?.chat?.chat
  );
  return (
    <>
      <div className="w-full bg-zinc-950 text-white rounded-t-lg shadow-xl p-4 py-3 flex flex-col gap-2 border-b-[1px] border-zinc-900">
        <div className="flex justify-between items-center">
          <div className="flex flex-row gap-3">
            <div className="relative w-fit">
              <img
                src={profileUrl}
                alt="User"
                className="w-11 h-11 rounded-full object-cover cursor-pointer"
                onClick={() => navigate("/profile/" + _id)}
              />
              <p
                className={`w-[10px] h-[10px] ${
                  onlineUser.some((curr) => curr.userId === _id)
                    ? "bg-green-600"
                    : "bg-gray-500"
                } rounded-full absolute bottom-0 right-0`}
              ></p>
            </div>
            <div className="flex flex-col gap-[1px] text-gray-100">
              <h1
                className="text-[15px] font-semibold cursor-pointer hover:underline"
                onClick={() => navigate("/profile/" + _id)}
              >
                {firstName + " " + lastName}
              </h1>
              <p className="text-xs text-ascent-2 font-semibold">
                {onlineUser.some((curr) => curr.userId === _id)
                  ? "Online"
                  : "Offline"}
              </p>
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
