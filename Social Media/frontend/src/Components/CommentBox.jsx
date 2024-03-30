import React, { useState } from "react";
import CommentsCard from "./CommentsCard";

const CommentBox = ({ postComments }) => {
  const [replyComment, setReplyComment] = useState(null);
  const [showReplies, setShowReplies] = useState(null);
  return (
    <>
      <div className="mt-5 flex flex-col">
        <div className="flex flex-col gap-3">
          <div className="flex flex-row gap-3 items-center">
            <img
              src="https://res.cloudinary.com/djs3wu5bg/image/upload/v1683874454/samples/people/boy-snow-hoodie.jpg"
              alt="User Avatar"
              className="w-8 h-8 rounded-full object-cover"
            />
            <input
              type="text"
              placeholder="Comment your post"
              className="flex-1 text-sm font-medium outline-none p-2 px-3 bg-black rounded-xl placeholder:text-gray-500 text-gray-300 w-full border-0 "
            />
          </div>
          <button className="self-end px-2 py-[2px] bg-blue rounded-xl text-[13px] font-semibold opacity-85">
            Submit
          </button>
        </div>
        <div className="flex flex-col gap-2">
          {postComments.map((curr, index) => {
            return (
              <CommentsCard
                comment={curr}
                key={index}
                index={index}
                lastIndex={postComments.length - 1}
                replyComment={replyComment}
                setReplyComment={setReplyComment}
                showReplies={showReplies}
                setShowReplies={setShowReplies}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CommentBox;
