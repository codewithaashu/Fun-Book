import React, { useState } from "react";
import { SlLocationPin } from "react-icons/sl";
import { BsBriefcase } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import moment from "moment";
import { useSelector } from "react-redux";
import EditModalContainer from "./EditModalContainer";
const SideProfile = ({ refresh, setRefresh }) => {
  //fetch user
  const user = useSelector((state) => state?.user?.user);
  //destructure the field of user
  const {
    profileUrl,
    firstName,
    lastName,
    verified,
    friends,
    createdAt,
    views,
    instagramURL,
    twitterURL,
    facebookURL,
    location,
    profession,
  } = user;

  const [openModal, setOpenModal] = useState(false);

  const handleEditModal = () => {
    setOpenModal(true);
  };

  return (
    <>
      <div className="bg-zinc-950 rounded-lg shadow-xl p-4 py-3">
        <div className="flex flex-row justify-between items-center pb-3 border-b-[1px] border-zinc-900">
          <div className="flex flex-row items-center gap-[6px]">
            <img
              src={profileUrl}
              alt="User Avatar"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex flex-col gap-0">
              <h1 className="text-base font-semibold ">
                {firstName + " " + lastName}
              </h1>
              <h1 className="text-sm font-semibold text-ascent-2">
                {profession ? profession : "No Profession"}
              </h1>
            </div>
          </div>
          <button
            className="border-[1px] px-3 py-1 border-gray-800 rounded-lg bg-black cursor-pointer shadow-lg w-fit h-fit text-ascent-2 text-sm font-semibold"
            onClick={handleEditModal}
          >
            Edit
          </button>
        </div>
        <div className="flex flex-col gap-2 py-3 border-b-[1px] border-zinc-900">
          <div className="flex flex-row gap-[3px] items-center text-ascent-2 text-sm font-semibold">
            <SlLocationPin />
            <p>{location ? location : "Add Location"}</p>
          </div>
          <div className="flex flex-row gap-[5px] items-center text-ascent-2 text-sm font-semibold">
            <BsBriefcase />
            <p>{profession ? profession : "Add Profession"}</p>
          </div>
        </div>
        <div className="flex flex-col py-3 border-b-[1px] border-zinc-900 gap-1">
          <h1 className="text-base font-semibold">{friends.length} Friends</h1>
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-sm font-medium text-ascent-2">
              Who viewed your profile
            </h1>
            <p className="text-sm font-semibold ">{views.length}</p>
          </div>
          <h1 className="text-[13px] font-semibold text-blue">
            {verified ? "Verified" : "Not Verified"} Account
          </h1>
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-sm font-medium text-ascent-2">Joined</h1>
            <p className="text-sm font-semibold ">
              {moment(createdAt).fromNow()}
            </p>
          </div>
        </div>
        <div className="flex flex-col py-3 gap-[6px]">
          <h1 className="text-[15px] font-semibold">Social Profile</h1>
          <div className="flex flex-row gap-[3px] items-center text-ascent-2 text-sm font-semibold hover:text-blue">
            <FaInstagram />
            <a
              href={
                instagramURL === "" ? "https://www.instagram.com" : instagramURL
              }
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
          <div className="flex flex-row gap-[3px] items-center text-ascent-2 text-sm font-semibold hover:text-blue">
            <FaSquareXTwitter />
            <a
              href={twitterURL === "" ? "https://twitter.com/" : twitterURL}
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </div>
          <div className="flex flex-row gap-[3px] items-center text-ascent-2 text-sm font-semibold hover:text-blue">
            <FaSquareFacebook />
            <a
              href={
                facebookURL === "" ? "https://www.facebook.com/" : facebookURL
              }
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
      <EditModalContainer
        refresh={refresh}
        setRefresh={setRefresh}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </>
  );
};

export default SideProfile;
