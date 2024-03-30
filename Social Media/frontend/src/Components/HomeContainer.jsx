import React from "react";
import SideProfile from "./SideProfile";
import FriendsRequestBox from "./FriendsRequestBox";
import FriendsSuggestionBox from "./FriendsSuggestionBox";
import FriendsBox from "./FriendsBox";
import CreatePostBox from "./CreatePostBox";
import PostContainer from "./PostContainer";
import { posts, requests, suggest, user } from "../assests/data";

const HomeContainer = () => {
  return (
    <>
      <div className="grid grid-cols-9 gap-x-4 my-4">
        <div className="col-span-2 flex flex-col gap-3">
          <SideProfile user={user} />
          <FriendsBox friends={user.friends} />
        </div>
        <div className="col-span-5 flex flex-col gap-[10px]">
          <CreatePostBox user={user} />
          <PostContainer posts={posts} />
        </div>
        <div className="col-span-2 flex flex-col gap-4">
          <FriendsRequestBox requests={requests} />
          <FriendsSuggestionBox suggestFriends={suggest} />
        </div>
      </div>
    </>
  );
};

export default HomeContainer;
