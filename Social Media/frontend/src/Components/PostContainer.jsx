import React, { useState } from "react";
import PostCard from "./PostCard";

const PostContainer = ({ posts }) => {
  const [postComment, setPostComment] = useState(null);
  return (
    <>
      <div className="h-full flex flex-col gap-2">
        {posts.map((curr, index) => {
          return (
            <PostCard
              post={curr}
              key={index}
              postComment={postComment}
              setPostComment={setPostComment}
            />
          );
        })}
      </div>
    </>
  );
};

export default PostContainer;
