import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { BsBriefcase } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import moment from "moment";
const SideProfile = ({
  user: {
    profileUrl,
    firstName,
    lastName,
    verified,
    friends,
    createdAt,
    views,
  },
}) => {
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
                No Profession
              </h1>
            </div>
          </div>
          <button className="border-[1px] px-3 py-1 border-gray-800 rounded-lg bg-black cursor-pointer shadow-lg w-fit h-fit text-ascent-2 text-sm font-semibold">
            Edit
          </button>
        </div>
        <div className="flex flex-col gap-2 py-3 border-b-[1px] border-zinc-900">
          <div className="flex flex-row gap-[3px] items-center text-ascent-2 text-sm font-semibold">
            <SlLocationPin />
            <p>Add Location</p>
          </div>
          <div className="flex flex-row gap-[5px] items-center text-ascent-2 text-sm font-semibold">
            <BsBriefcase />
            <p>Add Profession</p>
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
              href="https://www.instagram.com/ashish_2616_/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
          <div className="flex flex-row gap-[3px] items-center text-ascent-2 text-sm font-semibold hover:text-blue">
            <FaSquareXTwitter />
            <a
              href="https://twitter.com/?lang=en"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </div>
          <div className="flex flex-row gap-[3px] items-center text-ascent-2 text-sm font-semibold hover:text-blue">
            <FaSquareFacebook />
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideProfile;
