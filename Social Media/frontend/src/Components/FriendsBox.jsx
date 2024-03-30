import React from "react";
import NoProfilePic from "../assests/userprofile.png";
const FriendsBox = ({ friends }) => {
  return (
    <>
      <div className="bg-zinc-950 rounded-lg shadow-xl p-4 py-3">
        <div className="flex flex-row justify-between font-semibold pb-1 border-b-[1px] border-zinc-900">
          <h1 className="text-[15px] text-gray-300">Friends</h1>
          <p className="text-sm">{friends.length}</p>
        </div>
        <div className="flex flex-col gap-4 py-3">
          {friends.map((curr, index) => {
            const { firstName, lastName, profileUrl, profession } = curr;
            return (
              <div
                to={profileUrl}
                className="flex flex-row gap-[6px]"
                key={index}
              >
                <img
                  src={profileUrl ?? NoProfilePic}
                  alt="Friend Avatar"
                  className="w-9 h-9 rounded-full object-cover"
                />
                <div className="flex flex-col font-semibold text-sm">
                  <h1>{firstName + " " + lastName}</h1>
                  <p className="text-ascent-2 text-xs">
                    {profession ?? "No Profession"}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FriendsBox;
