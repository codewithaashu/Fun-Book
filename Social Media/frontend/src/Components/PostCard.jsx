import React, { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import NoProfilePic from "../assests/userprofile.png";
import moment from "moment";
import CommentBox from "./CommentBox";
import { postComments } from "../assests/data";
const PostCard = ({ post, postComment, setPostComment }) => {
  const [fullDescription, setFullDescription] = useState(false);
  const handleLike = () => {};
  const handleDelete = () => {};
  return (
    <>
      <div className="p-4 border-b-[1px] border-zinc-900 flex flex-col gap-3 bg-zinc-950 rounded-lg shadow-xl">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-2 items-center">
            <img
              src={post.userId.profileUrl ?? NoProfilePic}
              alt="User Avatar"
              className="w-7 h-7 rounded-full object-cover"
            />
            <p className="text-sm font-semibold text-white">
              {post.userId.firstName + " " + post.userId.lastName}
            </p>
          </div>
          <h1 className="text-xs font-semibold text-ascent-2">
            {moment(post.createdAt).fromNow()}
          </h1>
        </div>
        <div className="text-ascent-2 text-sm font-medium">
          {post.description.length > 250 ? (
            <>
              {fullDescription !== post._id ? (
                <p>
                  {post.description.slice(0, 250)}
                  <span
                    className="text-[13px] font-semibold text-blue px-1 cursor-pointer"
                    onClick={() => setFullDescription(post._id)}
                  >
                    Show More
                  </span>
                </p>
              ) : (
                post.description
              )}
            </>
          ) : (
            post.description
          )}
        </div>
        {post.image && (
          <img src={post.image} alt="Post" className="w-full rounded-sm" />
        )}
        <div className="flex flex-row justify-between mt-2">
          <div
            className="flex flex-row gap-1 items-center text-ascent-2 text-[13px] font-semibold cursor-pointer"
            onClick={handleLike}
          >
            <AiOutlineLike className="text-[15px]" />
            <p>
              {post.likes.length === 0
                ? "0 Like"
                : post.likes.length + " Likes"}
            </p>
          </div>
          <div
            className="flex flex-row gap-1 items-center text-ascent-2 text-[13px] font-semibold cursor-pointer"
            onClick={() =>
              setPostComment(postComment === post._id ? null : post._id)
            }
          >
            <BiComment className="text-sm" />
            <p>
              {post.comments.length === 0
                ? "0 Comment"
                : post.comments.length + " Comments"}
            </p>
          </div>
          <div
            className="flex flex-row gap-1 items-center text-ascent-2 text-[13px] font-semibold cursor-pointer"
            onClick={handleDelete}
          >
            <MdDelete className="text-sm" />
            <p>Delete</p>
          </div>
        </div>
        {postComment === post._id && <CommentBox postComments={postComments} />}
      </div>
    </>
  );
};

export default PostCard;
