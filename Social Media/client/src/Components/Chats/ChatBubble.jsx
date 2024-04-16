import React from "react";

const ChatBubble = ({ imgSrc, message, timestamp, sender = false }) => {
  return (
    <div className={`chat ${sender ? "chat-start" : "chat-end"}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="User Avatar" src={imgSrc} />
        </div>
      </div>
      <div className={`chat-bubble ${sender ? "bg-blue" : ""} text-gray-200`}>
        {message}
      </div>
      <div className="chat-footer opacity-50">{timestamp ?? "just now"}</div>
    </div>
  );
};

export default ChatBubble;
