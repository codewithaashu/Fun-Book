import React, { useState } from "react";
import { FaImage } from "react-icons/fa6";
import { IoVideocam } from "react-icons/io5";
import { AiOutlineFileGif } from "react-icons/ai";
import { errorToast } from "../utils/Toast";
import { Toaster } from "react-hot-toast";
import { createPost, uploadMedia } from "../utils/APIRequest";
const CreatePostBox = ({ user: { profileUrl }, setRefresh, refresh }) => {
  const [formData, setFormData] = useState({ description: "", mediaSrc: "" });
  const [loading, setLoading] = useState(false);
  const [mediaUpload, setMediaUpload] = useState(false);

  const handleUploadMedia = async (e) => {
    const file = e.target.files[0];
    //upload image

    //if file is larger
    if (file.size > 10485760) {
      errorToast("File is too large");
      return;
    }

    //if file is smaller, upload file
    setMediaUpload(true); //media upload to be true
    const mediaSrc = await uploadMedia(file);
    //after upload image, media upload to be false
    setMediaUpload(false); //media upload to be false
    setFormData({ ...formData, mediaSrc });
  };

  const handleCreatePost = async () => {
    //if there is no description
    if (!formData.description) {
      return errorToast("Description is required.");
    }
    //if post has description, then create post
    setLoading(true); //button loading to be true
    const success = await createPost(formData);
    setLoading(false); //button loading to be false
    if (success) {
      //if post is created successfully, then clear the form
      setFormData({ description: "", mediaSrc: "" });
      //refresh the page
      setRefresh(!refresh);
      return;
    }
  };

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
            value={formData.description}
            placeholder="What's in your mind"
            className="flex-1 text-sm font-medium outline-none p-3 bg-black rounded-2xl placeholder:text-gray-500 text-gray-300 w-full border-0 resize-none max-h-12 overflow-y-auto"
            style={{ scrollBehavior: "smooth", scrollbarWidth: "none" }}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          ></textarea>
        </div>
        {mediaUpload ? (
          <div className="w-full min-h-28 flex justify-center items-center">
            <div className="mediaUploadLoader"></div>
          </div>
        ) : (
          formData.mediaSrc && (
            <img src={formData.mediaSrc} alt="Upload Media" />
          )
        )}
        <div className="flex flex-row justify-between items-center">
          <label className="flex flex-row gap-1 items-center text-ascent-2 text-sm font-semibold hover:text-blue cursor-pointer">
            <input
              type="file"
              className="hidden"
              onChange={(e) => handleUploadMedia(e)}
              accept=".jpg, .jpeg, .png,.avif"
            />
            <FaImage />
            <p>Photo</p>
          </label>
          <label className="flex flex-row gap-1 items-center text-ascent-2 text-sm font-semibold hover:text-blue cursor-pointer">
            <input
              type="file"
              className="hidden"
              onChange={(e) => handleUploadMedia(e)}
              accept=".mp4,.mkv"
            />
            <IoVideocam className="text-base" />
            <p>Video</p>
          </label>
          <label className="flex flex-row gap-1 items-center text-ascent-2 text-sm font-semibold hover:text-blue cursor-pointer">
            <input
              type="file"
              className="hidden"
              onChange={(e) => handleUploadMedia(e)}
              accept=".gif"
            />
            <AiOutlineFileGif className="text-base" />
            <p>GIF</p>
          </label>
          <button
            className="text-sm font-semibold bg-blue w-16 py-1 rounded-lg"
            onClick={handleCreatePost}
            disabled={loading ? "disabled" : ""}
          >
            {loading ? <div className="loader"></div> : "Post"}
          </button>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default CreatePostBox;
