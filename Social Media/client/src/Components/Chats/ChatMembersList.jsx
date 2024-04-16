import React from "react";
import ChatListCard from "./ChatListCard";

const ChatMembersList = () => {
  return (
    <>
      <div
        className="bg-zinc-950 text-white w-full rounded-lg shadow-xl p-4 py-3 flex flex-col gap-2 flex-1 overflow-y-scroll"
        style={{ scrollBehavior: "smooth", scrollbarWidth: "none" }}
      >
        <div className="border-b-[1px] border-zinc-900 pb-[6px]">
          <ChatListCard />
        </div>
        <div className="border-b-[1px] border-zinc-900 pb-[6px]">
          <ChatListCard />
        </div>
        <div className="border-b-[1px] border-zinc-900 pb-[6px]">
          <ChatListCard />
        </div>
        <div className="border-b-[1px] border-zinc-900 pb-[6px]">
          <ChatListCard />
        </div>
      </div>
    </>
  );
};

export default ChatMembersList;
