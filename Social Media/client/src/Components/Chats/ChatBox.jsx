import React, { useState } from "react";
import ChatBubble from "./ChatBubble";
import { FiSend } from "react-icons/fi";
import InputEmoji from "react-input-emoji";
import { IoImages } from "react-icons/io5";
import { IoVideocam } from "react-icons/io5";
const ChatBox = () => {
  const [text, setText] = useState("");

  function handleOnEnter(text) {
    console.log("enter", text);
  }
  return (
    <>
      <div className="bg-zinc-950 rounded-b-lg shadow-xl relative flex-1">
        {/* Chat Box */}
        <div
          className="flex flex-col gap-1 p-4 h-[65vh] overflow-y-scroll"
          style={{ scrollbarWidth: "none", scrollBehavior: "smooth" }}
        >
          <ChatBubble
            imgSrc={
              "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            }
            message={"Will you marry me?"}
            sender={true}
          />
          <ChatBubble
            imgSrc={
              "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            }
            message={"Yes, i do."}
          />
          <ChatBubble
            imgSrc={
              "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            }
            message={"Will you marry me?"}
            sender={true}
          />
          <ChatBubble
            imgSrc={
              "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            }
            message={"Yes, i do."}
          />
        </div>
        {/* Input Box */}
        <div className="flex flex-row items-center gap-3  bottom-0 w-full p-3 sticky">
          <div className="flex flex-row gap-3 text-xl">
            <label>
              <input type="file" accept=".jpg,.png,.jpeg,.heif,.avif" hidden />
              <IoImages className="cursor-pointer" />
            </label>
            <label>
              <input
                type="file"
                accept=".mp4, .3gp,.webm,.hevc,.mkv,.avi,.mov"
                hidden
              />
              <IoVideocam className="cursor-pointer" />
            </label>
          </div>
          <div className="w-full">
            <InputEmoji
              value={text}
              onChange={setText}
              cleanOnEnter
              onEnter={handleOnEnter}
              placeholder="Type a message"
              background="black"
              color="white"
              placeholderColor="gray"
              borderRadius={16}
            />
          </div>
          <button className="p-[10px] rounded-lg bg-blue w-fit">
            <FiSend className="text-xl" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatBox;
