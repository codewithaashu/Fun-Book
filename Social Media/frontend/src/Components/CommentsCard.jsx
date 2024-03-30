import React, { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import NoProfilePic from "../assests/userprofile.png";
import ReplyCard from "./ReplyCard";
const CommentsCard = ({
  comment: { userId, comment, from, likes, replies, _id },
  index,
  lastIndex,
  replyComment,
  setReplyComment,
  showReplies,
  setShowReplies,
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
        <div className="flex flex-col gap-0 w-full">
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
            <button
              className="text-xs text-blue"
              onClick={() => {
                setReplyComment(replyComment === _id ? null : _id);
              }}
            >
              Reply
            </button>
          </div>
          {replyComment === _id ? (
            <div className="flex flex-col gap-3 mt-4 mb-2 w-full">
              <div className="flex flex-row gap-3 items-center">
                <img
                  src="https://res.cloudinary.com/djs3wu5bg/image/upload/v1683874454/samples/people/boy-snow-hoodie.jpg"
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <input
                  type="text"
                  placeholder={`Reply ${from}`}
                  className="flex-1 text-sm font-medium outline-none p-2 px-3 bg-black rounded-xl placeholder:text-gray-500 text-gray-300 w-full border-0 "
                />
              </div>
              <button className="self-end px-2 py-[2px] bg-blue rounded-xl text-[13px] font-semibold opacity-85">
                Submit
              </button>
            </div>
          ) : null}
          <div className="flex flex-col gap-2 py-2">
            {replies.length > 0 && (
              <>
                <h1
                  className="text-[13px] font-semibold cursor-pointer"
                  onClick={() =>
                    setShowReplies(showReplies === _id ? null : _id)
                  }
                >
                  Show Replies({replies.length})
                </h1>
                {showReplies && (
                  <div className="px-2">
                    {replies.map((curr, index) => {
                      return (
                        <ReplyCard
                          reply={curr}
                          key={index}
                          index={index}
                          lastIndex={replies.length - 1}
                        />
                      );
                    })}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentsCard;
