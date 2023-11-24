import { useState } from "react";
import preed from "../preed.jpg";
import profile from "../profile.jpg";

const Publish = () => {
  const [subscribed, setSubscribed] = useState(null);
  const leaderboardmenu = [
    {
      categeory: "Boxing",
      leaderboards: [
        {
          id: 1,
          profile: profile,
          username: "@Deontaywilder",
          callouts: "18 call ",
          videoimg: preed,
        },
        {
          id: 2,
          profile: profile,
          username: "@Gjdwyercdvbhcbdhjcbhdcbdbchjdbchdbchjdcbhdcbjdbc",
          callouts: "118 call ",
          videoimg: preed,
        },
      ],
    },
    {
      categeory: "Badminton",
      leaderboards: [
        {
          id: 1,
          profile: profile,
          username: "@Deontweweaywilderhcdbchjbdchjbdhcbdhcjbdhjcdb",
          callouts: "112 call ",
          videoimg: preed,
          subscribed: true,
        },
        {
          id: 2,
          profile: profile,
          username: "@Dweweon",
          callouts: "32 call ",
          videoimg: preed,
        },
      ],
    },
  ];
  return (
    <div className="p-5 pt-4 right-area position-relative justify-content-around align-items-center">
      {leaderboardmenu.map((leaderbord) => {
        return (
          <div>
            <div>
              <span className="fw-600" style={{ marginLeft: "12%" }}>
                {leaderbord.categeory}
              </span>
            </div>
            {leaderbord.leaderboards.map((menu) => {
              return (
                <div className=" my-3 leaderboardItem">
                  <div className="p-2 ">{menu.id}</div>
                  <img className="profileImg" src={menu.profile}></img>
                  <div>
                    <div
                      className="text-truncate"
                      style={{ fontWeight: "600", fontSize: "14px" }}
                    >
                      {menu.username}
                    </div>
                    <div
                      className="fs-md"
                      style={{
                        color: "green",
                        fontWeight: "bold",
                        fontSize: "12px",
                      }}
                    >
                      {menu.callouts}
                    </div>
                  </div>
                  {subscribed ? (
                    <button>Subscribed</button>
                  ) : (
                    <img className="videoImg" src={menu.videoimg}></img>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Publish;
