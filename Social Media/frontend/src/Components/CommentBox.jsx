import React, { useEffect, useState } from "react";
import CommentsCard from "./CommentsCard";
import { commentPost, getPostComments } from "../utils/APIRequest";
import { useSelector } from "react-redux";

const CommentBox = ({ postId, refresh, setRefresh }) => {
  const [replyComment, setReplyComment] = useState(null);
  const [showReplies, setShowReplies] = useState(null);
  const [formData, setFormData] = useState({ comment: "", postId });
  const [postComments, setPostComments] = useState(null);
  const user = useSelector((state) => state?.user?.user);
  useEffect(
    () => async () => {
      //get all comments
      const comments = await getPostComments(postId);
      setPostComments(comments);
    },
    [formData, refresh]
  );

  const handleCommentPost = async () => {
    const success = await commentPost(formData);
    if (success) {
      setRefresh(!refresh);
      setFormData({ comment: "", postId });
    }
  };

  return (
    <>
      <div className="mt-5 flex flex-col">
        <div className="flex flex-col gap-3">
          <div className="flex flex-row gap-3 items-center">
            <img
              src={user.profileUrl}
              alt="User Avatar"
              className="w-8 h-8 rounded-full object-cover"
            />
            <input
              type="text"
              value={formData.comment}
              placeholder="Comment your post"
              className="flex-1 text-sm font-medium outline-none p-2 px-3 bg-black rounded-xl placeholder:text-gray-500 text-gray-300 w-full border-0 "
              onChange={(e) =>
                setFormData({ ...formData, comment: e.target.value })
              }
            />
          </div>
          <button
            className="self-end px-2 py-[2px] bg-blue rounded-xl text-[13px] font-semibold opacity-85"
            onClick={handleCommentPost}
          >
            Submit
          </button>
        </div>
        <div className="flex flex-col gap-2">
          {postComments?.map((curr, index) => {
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
                refresh={refresh}
                setRefresh={setRefresh}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CommentBox;
