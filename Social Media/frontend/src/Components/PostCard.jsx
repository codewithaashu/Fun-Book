import React, { useState } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import NoProfilePic from "../assests/userprofile.png";
import moment from "moment";
import CommentBox from "./CommentBox";
import { postComments } from "../assests/data";
import { deletePost, likePost } from "../utils/APIRequest";
import { useSelector } from "react-redux";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

const PostCard = ({
  post,
  postComment,
  setPostComment,
  setRefresh,
  refresh,
}) => {
  const user = useSelector((state) => state?.user?.user);
  const [fullDescription, setFullDescription] = useState(false);
  const [like, setLike] = useState({
    likes: post.likes.includes(user._id),
    likeCount: post.likes.length,
  });

  const handleLike = async () => {
    //like post
    const { likeCount, likes } = await likePost(post._id);
    setLike({ likeCount, likes });
  };
  console.log(post);
  const handleDelete = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui bg-black rounded-md p-5 py-8  text-white shadow-md w-80 flex flex-col gap-1">
            <h1 className="text-lg font-semibold">Are you sure?</h1>
            <p className="text-sm font-medium ">
              You want to delete this post?
            </p>
            <div className="flex flex-row justify-between mt-5">
              <button
                onClick={async () => {
                  const success = await deletePost(post._id);
                  if (success) {
                    setRefresh(!refresh);
                    onClose();
                  }
                }}
                className="text-sm text-white bg-blue rounded-sm p-2 font-semibold w-16"
              >
                Yes
              </button>
              <button
                onClick={onClose}
                className="text-sm text-white bg-red-600 rounded-sm p-2 font-semibold w-16"
              >
                No
              </button>
            </div>
          </div>
        );
      },
    });
  };
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
        {post.mediaSrc && (
          <img src={post.mediaSrc} alt="Post" className="w-full rounded-sm" />
        )}
        <div className="flex flex-row justify-between mt-2">
          <div
            className="flex flex-row gap-1 items-center text-ascent-2 text-[13px] font-semibold cursor-pointer"
            onClick={handleLike}
          >
            {like.likes ? (
              <AiFillLike className="text-[15px] text-blue" />
            ) : (
              <AiOutlineLike className="text-[15px]" />
            )}
            <p>{like.likeCount === 0 ? "0 Like" : like.likeCount + " Likes"}</p>
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
        {postComment === post._id && (
          <CommentBox
            postId={post._id}
            refresh={refresh}
            setRefresh={setRefresh}
          />
        )}
      </div>
    </>
  );
};

export default PostCard;
