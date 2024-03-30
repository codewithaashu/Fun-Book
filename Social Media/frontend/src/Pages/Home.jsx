import React from "react";
import NavBar from "../Components/NavBar";
import HomeContainer from "../Components/HomeContainer";

const Home = () => {
  return (
    <>
      <div className="w-full min-h-screen px-16 bg-black text-white">
        <NavBar />
        <HomeContainer />
      </div>
    </>
  );
};

export default Home;
