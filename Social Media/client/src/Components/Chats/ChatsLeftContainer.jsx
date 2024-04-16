import React from "react";
import ChatsLeftHeader from "./ChatsLeftHeader";
import ChatMembersList from "./ChatMembersList";

const ChatsLeftContainer = () => {
  return (
    <>
      <div className="flex flex-col gap-[6px] w-1/4 h-[85vh]">
        <ChatsLeftHeader />
        <ChatMembersList />
      </div>
    </>
  );
};

export default ChatsLeftContainer;
