import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { fetchAllPosts } from "../utils/APIRequest";
const PostContainer = ({ setRefresh, refresh }) => {
  const [postComment, setPostComment] = useState(null);
  const [posts, setPosts] = useState(null);

  useEffect(
    () => async () => {
      const resp = await fetchAllPosts();
      setPosts(resp);
    },
    [refresh]
  );
  return (
    <>
      <div className="h-full flex flex-col gap-2">
        {posts?.map((curr, index) => {
          return (
            <PostCard
              post={curr}
              key={index}
              postComment={postComment}
              setPostComment={setPostComment}
              setRefresh={setRefresh}
              refresh={refresh}
            />
          );
        })}
      </div>
    </>
  );
};

export default PostContainer;
