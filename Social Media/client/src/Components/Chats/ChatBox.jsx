import React, { useEffect, useRef, useState } from "react";
import ChatBubble from "./ChatBubble";
import { FiSend } from "react-icons/fi";
import InputEmoji from "react-input-emoji";
import { IoImages } from "react-icons/io5";
import { IoVideocam } from "react-icons/io5";
import { errorToast } from "../../utils/Toast";
import { getAllMessages, sendMessage } from "../../utils/APIRequest";
import { useSelector } from "react-redux";
const ChatBox = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(null);
  const scroll = useRef();
  const arr = [0, 1, 2, 3, 4, 5, 6];
  //get selected chat user details
  const { chat } = useSelector((state) => state.chat);
  //get login user id details
  const { loginUser } = useSelector((state) => state?.user);
  //send message
  const handleOnEnter = async (message) => {
    console.log(message);
    //if message is empty
    if (!message) {
      errorToast("Please write something...");
      return;
    }
    //if message is not empty then sent message
    const formData = { message, recieverId: chat._id };
    const success = await sendMessage(formData);
    if (success) {
      setMessage("");
    }
  };

  const handleApi = async () => {
    //get all the conversations/messages between two users
    const res = await getAllMessages(chat._id);
    console.log(res);
    setMessages(res);
  };

  useEffect(() => {
    document.getElementById("chatBox").scrollIntoView(false);
    // scroll.current?.scrollIntoView({ scollBehaviour: "smooth" });
    handleApi();
  }, [chat]);

  return (
    <>
      <div
        id="chatBox"
        className="bg-zinc-950 rounded-b-lg shadow-xl h-[75vh] overflow-y-scroll"
        style={{ scrollbarWidth: "none", scrollBehavior: "smooth" }}
        ref={scroll}
      >
        {/* Chat Box */}
        {messages ? (
          messages.length === 0 ? (
            <div className="w-full py-10 flex justify-center items-center">
              <h1 className="text-base font-semibold text-gray-300">
                No messages yet. Start conversation with{" "}
                <span className="text-gray-200">
                  {chat.firstName + " " + chat.lastName}
                </span>
              </h1>
            </div>
          ) : (
            <div className="py-4 px-3 flex flex-col gap-2">
              {messages.map(({ message, sender, createdAt }, index) => {
                return (
                  <ChatBubble
                    imgSrc={
                      loginUser._id !== sender
                        ? chat.profileUrl
                        : loginUser.profileUrl
                    }
                    message={message}
                    reciever={loginUser._id !== sender}
                    key={index}
                    createdAt={createdAt}
                  />
                );
              })}
            </div>
          )
        ) : (
          <div className="py-4 px-3">
            {arr.map((index) => {
              return (
                <div
                  className={`chat ${
                    index % 2 === 0 ? "chat-start" : "chat-end"
                  }`}
                  key={index}
                >
                  <div className="chat-image avatar">
                    <div className="skeleton w-10 h-10 rounded-full shrink-0"></div>
                  </div>
                  <div className="chat-bubble skeleton h-4 w-36"></div>
                </div>
              );
            })}
          </div>
        )}

        {/* Input Box */}
        <div className="flex flex-row items-center gap-3 w-full p-3">
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
              value={message}
              onChange={setMessage}
              onEnter={handleOnEnter}
              placeholder="Type a message"
              background="black"
              color="white"
              placeholderColor="gray"
              borderRadius={16}
            />
          </div>
          <button
            className="p-[10px] rounded-lg bg-blue w-fit"
            onClick={() => handleOnEnter(message)}
          >
            <FiSend className="text-xl" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatBox;
