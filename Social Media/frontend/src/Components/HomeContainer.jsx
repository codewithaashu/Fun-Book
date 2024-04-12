import React, { useEffect, useState } from "react";
import SideProfile from "./SideProfile";
import FriendsRequestBox from "./FriendsRequestBox";
import FriendsSuggestionBox from "./FriendsSuggestionBox";
import FriendsBox from "./FriendsBox";
import CreatePostBox from "./CreatePostBox";
import PostContainer from "./PostContainer";
import { getUser } from "../utils/APIRequest";
import { useDispatch } from "react-redux";
import { login } from "../Redux/UserSlice";
const HomeContainer = () => {
  const [user, setUser] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const dispatch = useDispatch();
  useEffect(
    () => async () => {
      //set user
      const loginUser = await getUser();
      dispatch(login(loginUser));
      setUser(loginUser);
    },
    [refresh]
  );
  return (
    <>
      {user ? (
        <div className="grid grid-cols-9 gap-x-4 my-4 relative">
          <div className="col-span-2 flex flex-col gap-3">
            <SideProfile refresh={refresh} setRefresh={setRefresh} />
            <FriendsBox friends={user.friends} />
          </div>
          <div className="col-span-5 flex flex-col gap-[10px]">
            <CreatePostBox
              user={user}
              refresh={refresh}
              setRefresh={setRefresh}
            />
            <PostContainer refresh={refresh} setRefresh={setRefresh} />
          </div>
          <div className="col-span-2 flex flex-col gap-4">
            <FriendsRequestBox refresh={refresh} setRefresh={setRefresh} />
            <FriendsSuggestionBox refresh={refresh} setRefresh={setRefresh} />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-9 gap-x-4 my-4 relative">
          <div className="col-span-2 flex flex-col gap-3">
            <div className="skeleton h-96 p-4 py-3  w-full"></div>
            <div className="skeleton h-44 p-4 py-3  w-full"></div>
          </div>
          <div className="col-span-5 flex flex-col gap-[10px]">
            <div className="skeleton h-28 p-4 py-3  w-full"></div>
            <div className="skeleton h-28 p-4 py-3  w-full"></div>
            <div className="skeleton h-28 p-4 py-3  w-full"></div>
            <div className="skeleton h-28 p-4 py-3  w-full"></div>
            <div className="skeleton h-28 p-4 py-3  w-full"></div>
          </div>
          <div className="col-span-2 flex flex-col gap-4">
            <div className="skeleton h-36 p-4 py-3  w-full"></div>
            <div className="skeleton h-72 p-4 py-3  w-full"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeContainer;
