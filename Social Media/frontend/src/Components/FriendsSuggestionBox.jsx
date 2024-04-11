import React, { useEffect, useState } from "react";
import NoProfilePic from "../assests/userprofile.png";
import { FaUserPlus, FaUserCheck } from "react-icons/fa6";
import { getFriendSuggestList, sendFriendRequest } from "../utils/APIRequest";
const FriendsSuggestionBox = () => {
  const [suggestFriends, setSuggestFriends] = useState(null);
  const [sentFriendRequest, setSentFriendRequest] = useState(null);
  useEffect(
    () => async () => {
      const suggestPeople = await getFriendSuggestList();
      setSuggestFriends(suggestPeople);
    },
    []
  );

  const handleFriendRequest = async (id) => {
    const success = await sendFriendRequest({ requestTo: id });
    console.log(success);
    if (success) {
      setSentFriendRequest(id);
    }
  };

  return (
    <>
      <div className="bg-zinc-950 rounded-lg shadow-xl p-4 py-3">
        <div className="flex flex-row justify-between font-semibold pb-1 border-b-[1px] border-zinc-900">
          <h1 className="text-[15px] text-gray-300">Friend Suggestion</h1>
          <p className="text-sm">{suggestFriends?.length ?? 0}</p>
        </div>
        <div className="flex flex-col gap-5 py-3">
          {suggestFriends?.map((curr, index) => {
            const { profileUrl, profession, firstName, lastName, _id } = curr;
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
                  <button
                    className="text-[15px] font-semibold text-blue"
                    onClick={() => handleFriendRequest(_id)}
                    disabled={sentFriendRequest === _id}
                  >
                    {sentFriendRequest === _id ? (
                      <FaUserCheck />
                    ) : (
                      <FaUserPlus />
                    )}
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

export default FriendsSuggestionBox;
