import React from "react";
import ChatListCard from "./ChatListCard";
import { useDispatch } from "react-redux";
import { setChat } from "../../Redux/ChatSlice";

const ChatMembersList = ({ friends }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div
        className="bg-zinc-950 text-white w-full rounded-lg shadow-xl p-4 py-3 flex flex-col gap-2 flex-1 overflow-y-scroll"
        style={{ scrollBehavior: "smooth", scrollbarWidth: "none" }}
      >
        {friends?.map((curr, index) => {
          return (
            <div
              className="border-b-[1px] border-zinc-900 pb-[6px]"
              key={index}
              onClick={() => dispatch(setChat(curr))}
            >
              <ChatListCard friend={curr} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ChatMembersList;
