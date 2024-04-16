import React, { useEffect } from "react";
import NavBar from "../Components/NavBar";
import ChatsLeftContainer from "../Components/Chats/ChatsLeftContainer";
import ChatsRightContainer from "../Components/Chats/ChatsRightContainer";

const Chats = () => {
  useEffect(() => {
    document.title = "Chats | FunBook";
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="w-full  px-2 md:px-16 bg-black text-white mb-3 relative ">
        <NavBar />
        <div className="flex flex-row gap-5 mt-4 w-full">
          <ChatsLeftContainer />
          <ChatsRightContainer />
        </div>
      </div>
    </>
  );
};

export default Chats;
