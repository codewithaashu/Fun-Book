import React from "react";
import ChatsRightHeader from "./ChatsRightHeader";
import ChatBox from "./ChatBox";

const ChatsRightContainer = () => {
  return (
    <>
      <div className="w-3/4">
        <ChatsRightHeader />
        <ChatBox />
      </div>
    </>
  );
};

export default ChatsRightContainer;
