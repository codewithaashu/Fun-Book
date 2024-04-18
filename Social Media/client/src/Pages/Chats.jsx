import React, { useEffect } from "react";
import NavBar from "../Components/NavBar";
import ChatsLeftContainer from "../Components/Chats/ChatsLeftContainer";
import ChatsRightContainer from "../Components/Chats/ChatsRightContainer";

const Chats = () => {
  useEffect(() => {
    //change the title
    document.title = "Chats | FunBook";
    //scroll page to top
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="w-full px-2 md:px-16 bg-black text-white mb-3">
        <div className="max-h-[15vh]">
          <NavBar />
        </div>
        <div className="flex flex-row gap-5 mt-3 w-full max-h-[85vh]">
          <ChatsLeftContainer />
          <ChatsRightContainer />
        </div>
      </div>
    </>
  );
};

export default Chats;
