import React from "react";
import NoProfilePic from "../assests/userprofile.png";
const FriendsRequestBox = ({ requests }) => {
  return (
    <>
      <div className="bg-zinc-950 rounded-lg shadow-xl p-4 py-3">
        <div className="flex flex-row justify-between font-semibold pb-1 border-b-[1px] border-zinc-900">
          <h1 className="text-[15px] text-gray-300">Friend Request</h1>
          <p className="text-sm">{requests.length}</p>
        </div>
        <div className="flex flex-col gap-5 py-3">
          {requests.map((curr, index) => {
            const { profileUrl, profession, firstName, lastName } =
              curr.requestFrom;
            return (
              <div
                className="flex flex-row justify-between items-center"
                key={index}
              >
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
                <div className="flex flex-row gap-2">
                  <button className="text-xs font-semibold bg-blue  rounded-lg p-[5px]">
                    Accept
                  </button>
                  <button className="text-xs font-semibold bg-black border-[1px] border-gray-700 rounded-lg p-[5px]">
                    Deny
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FriendsRequestBox;
