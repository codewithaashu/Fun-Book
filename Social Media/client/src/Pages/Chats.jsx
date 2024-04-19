import React, { useEffect, useRef, useState } from "react";
import NavBar from "../Components/NavBar";
import ChatsLeftContainer from "../Components/Chats/ChatsLeftContainer";
import ChatsRightContainer from "../Components/Chats/ChatsRightContainer";
//to use socket service in frontend , download socket.io-client library
import { io } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { setOnlineUser } from "../Redux/ChatSlice";

const Chats = () => {
  const dispatch = useDispatch();
  const socket = useRef();
  const { _id } = useSelector((state) => state?.user?.loginUser);
  const { chat } = useSelector((state) => state.chat);
  // const [onlineUsers, setOnlineUsers] = useState([]);
  const [sentMessage, setSentMessage] = useState(null);
  const [recievedMessage, setRecievedMessage] = useState(null);

  useEffect(() => {
    //change the title
    document.title = "Chats | FunBook";
    //scroll page to top
    // window.scrollTo(0, 0);
    //create a socket on io circuit
    socket.current = io("ws://localhost:8800");
    //add user to active user list by trigged an event "add-me-active-users-list"
    socket.current.emit("add-me-active-users-list", _id);
    //add active users to active users
    socket.current.on("get-active-users-list", (activeUsers) => {
      dispatch(setOnlineUser(activeUsers));
    });
  }, [_id]);

  useEffect(() => {
    //whenever a new message is sent,"send-message" event triggered
    if (sentMessage) {
      socket.current.emit("send-message", {
        ...sentMessage,
        recieverId: chat._id,
      });
    }
  }, [sentMessage]);

  useEffect(() => {
    //listen the event "recieve-message"
    socket.current.on("recieve-message", (data) => {
      setRecievedMessage(data);
    });
  }, [recievedMessage]);

  return (
    <>
      <div className="w-full px-2 md:px-16 bg-black text-white grid grid-rows-7 max-h-[100vh] overflow-y-hidden">
        <div className="row-span-1">
          <NavBar />
        </div>
        <div className="flex flex-row gap-5 w-full row-span-6">
          <ChatsLeftContainer />
          <ChatsRightContainer
            setSentMessage={setSentMessage}
            recievedMessage={recievedMessage}
          />
        </div>
      </div>
    </>
  );
};

export default Chats;
