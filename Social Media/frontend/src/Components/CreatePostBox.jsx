import React from "react";
import { FaImage } from "react-icons/fa6";
import { IoVideocam } from "react-icons/io5";
import { AiOutlineFileGif } from "react-icons/ai";
const CreatePostBox = ({ user: { profileUrl } }) => {
  return (
    <>
      <div className="bg-zinc-950 rounded-sm shadow-xl p-4 flex flex-col gap-4">
        <div className="flex flex-row gap-2 items-center">
          <img
            src={profileUrl}
            alt="User Avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <textarea
            type="text"
            placeholder="What's in your mind"
            className="flex-1 text-sm font-medium outline-none p-3 bg-black rounded-2xl placeholder:text-gray-500 text-gray-300 w-full border-0 resize-none max-h-12 overflow-y-auto"
            style={{ scrollBehavior: "smooth", scrollbarWidth: "none" }}
          ></textarea>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-1 items-center text-ascent-2 text-sm font-semibold hover:text-blue cursor-pointer">
            <FaImage />
            <p>Photo</p>
          </div>
          <div className="flex flex-row gap-1 items-center text-ascent-2 text-sm font-semibold hover:text-blue cursor-pointer">
            <IoVideocam className="text-base" />
            <p>Video</p>
          </div>
          <div className="flex flex-row gap-1 items-center text-ascent-2 text-sm font-semibold hover:text-blue cursor-pointer">
            <AiOutlineFileGif className="text-base" />
            <p>GIF</p>
          </div>
          <button className="text-sm font-semibold bg-blue w-16 py-1 rounded-lg">
            Post
          </button>
        </div>
      </div>
    </>
  );
};

export default CreatePostBox;
