import React from "react";
import NoProfilePic from "../assests/userprofile.png";
import { AiOutlineLike } from "react-icons/ai";
const ReplyCard = ({
  reply: { userId, comment, from, likes },
  index,
  lastIndex,
}) => {
  const handleLike = () => {};
  return (
    <>
      <div
        className={`${
          lastIndex === index ? "border-b-0" : "border-b-[1px]"
        } border-zinc-900 py-2 flex flex-row gap-2`}
      >
        <img
          src={userId?.profileUrl ?? NoProfilePic}
          alt="User Avatar"
          className="w-8 h-8 rounded-full object-cover"
        />
        <div className="flex flex-col gap-0">
          <h1 className="text-sm font-semibold">{from}</h1>
          <p className="text-xs font-semibold text-ascent-2">4 days ago</p>
          <p className="text-sm font-medium text-gray-300 py-1">{comment}</p>
          <div className="flex flex-row gap-3">
            <div
              className="flex flex-row gap-1 items-center text-ascent-2 text-[13px] font-semibold cursor-pointer"
              onClick={handleLike}
            >
              <AiOutlineLike className="text-[15px]" />
              <p>{likes.length === 0 ? "0 Like" : likes.length + " Likes"}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReplyCard;
