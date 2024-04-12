import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import HomeContainer from "../Components/HomeContainer";
const Home = () => {
  useEffect(() => {
    document.title = "Home | FunBook";
  }, []);
  return (
    <>
      <div className="w-full min-h-screen px-16 bg-black text-white mb-2">
        <NavBar />
        <HomeContainer />
      </div>
    </>
  );
};

export default Home;
