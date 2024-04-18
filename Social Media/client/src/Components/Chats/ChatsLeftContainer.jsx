import React, { useEffect, useState } from "react";
import ChatsLeftHeader from "./ChatsLeftHeader";
import ChatMembersList from "./ChatMembersList";
import { useSelector } from "react-redux";

const ChatsLeftContainer = () => {
  //get user friends
  const { loginUser } = useSelector((state) => state?.user);
  //set friends as chat member list
  const [friends, setFriends] = useState(loginUser?.friends);
  const [searchText, setSearchText] = useState("");

  //searching functionality
  useEffect(() => {
    if (searchText === "") {
      setFriends(loginUser?.friends);
    } else {
      setFriends(
        loginUser?.friends?.filter(
          (curr) =>
            curr.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
            curr.lastName.toLowerCase().includes(searchText.toLowerCase())
        )
      );
    }
  }, [searchText]);

  return (
    <>
      <div className="flex flex-col gap-[6px] w-1/4 h-[85vh]">
        <ChatsLeftHeader setSearchText={setSearchText} />
        <ChatMembersList friends={friends} />
      </div>
    </>
  );
};

export default ChatsLeftContainer;
