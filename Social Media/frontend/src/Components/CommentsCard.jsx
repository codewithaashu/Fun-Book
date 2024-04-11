import React, { useState } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import NoProfilePic from "../assests/userprofile.png";
import ReplyCard from "./ReplyCard";
import {
  getCommentReplies,
  likeComment,
  repliedComment,
} from "../utils/APIRequest";
import { useSelector } from "react-redux";
import moment from "moment";
const CommentsCard = ({
  comment: { userId, comment, likes, replies, _id, createdAt },
  index,
  lastIndex,
  replyComment,
  setReplyComment,
  showReplies,
  setShowReplies,
  refresh,
  setRefresh,
}) => {
  const user = useSelector((state) => state?.user?.user);
  const [like, setLike] = useState({
    likes: likes.includes(user._id),
    likeCount: likes.length,
  });
  const [formData, setFormData] = useState({ reply: "", commentId: _id });
  console.log(replies);
  const [allReplies, setAllReplies] = useState(null);
  const handleLike = async () => {
    //like post
    const { likeCount, likes } = await likeComment(_id);
    setLike({ likeCount, likes });
  };

  const handleReply = async () => {
    const success = await repliedComment(formData);
    if (success) {
      setRefresh(!refresh);
      setFormData({ reply: "", commentId: _id });
    }
  };

  const handleGetReplies = async (id) => {
    setShowReplies(showReplies === _id ? null : _id);
    const resp = await getCommentReplies(id);
    console.log(resp);
    setAllReplies(resp);
  };
  return (
    <>
      <div
        className={`${
          lastIndex === index ? "border-b-0" : "border-b-[1px]"
        } border-zinc-900 py-2 flex flex-row gap-2`}
      >
        <img
          src={userId?.profileUrl}
          alt="User Avatar"
          className="w-8 h-8 rounded-full object-cover"
        />
        <div className="flex flex-col gap-0 w-full">
          <h1 className="text-sm font-semibold">
            {userId.firstName + " " + userId.lastName}
          </h1>
          <p className="text-xs font-semibold text-ascent-2">
            {moment(createdAt).fromNow()}
          </p>
          <p className="text-sm font-medium text-gray-300 py-1">{comment}</p>
          <div className="flex flex-row gap-3">
            <div
              className="flex flex-row gap-1 items-center text-ascent-2 text-[13px] font-semibold cursor-pointer"
              onClick={handleLike}
            >
              {like.likes ? (
                <AiFillLike className="text-[15px] text-blue" />
              ) : (
                <AiOutlineLike className="text-[15px]" />
              )}
              <p>
                {like.likeCount === 0 ? "0 Like" : like.likeCount + " Likes"}
              </p>
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
                  src={userId?.profileUrl}
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <input
                  type="text"
                  value={formData.reply}
                  placeholder={`Reply ${
                    userId.firstName + " " + userId.lastName
                  }`}
                  className="flex-1 text-sm font-medium outline-none p-2 px-3 bg-black rounded-xl placeholder:text-gray-500 text-gray-300 w-full border-0 "
                  onChange={(e) =>
                    setFormData({ ...formData, reply: e.target.value })
                  }
                />
              </div>
              <button
                className="self-end px-2 py-[2px] bg-blue rounded-xl text-[13px] font-semibold opacity-85"
                onClick={handleReply}
              >
                Submit
              </button>
            </div>
          ) : null}
          <div className="flex flex-col gap-2 py-2">
            {replies.length > 0 && (
              <>
                <h1
                  className="text-[13px] font-semibold cursor-pointer"
                  onClick={() => handleGetReplies(_id)}
                >
                  Show Replies({replies.length})
                </h1>
                {showReplies && (
                  <div className="px-2">
                    {allReplies?.map((curr, index) => {
                      return (
                        <ReplyCard
                          replied={curr}
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
