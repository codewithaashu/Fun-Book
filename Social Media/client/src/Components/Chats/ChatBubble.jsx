import moment from "moment";
import React from "react";

const ChatBubble = ({ imgSrc, message, timestamp, reciever, createdAt }) => {
  return (
    <div className={`chat ${reciever ? "chat-start" : "chat-end"}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="User Avatar" src={imgSrc} />
        </div>
      </div>
      <div className={`chat-bubble ${reciever ? "bg-blue" : ""} text-gray-200`}>
        {message}
      </div>
      <div className="chat-footer opacity-50">
        {moment(createdAt).fromNow()}
      </div>
    </div>
  );
};

export default ChatBubble;
