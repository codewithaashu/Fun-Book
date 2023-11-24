import React from "react";
import Header from "./Components/Header";
import "./App.css";
import About from "./Components/About";
import UpcomingTrips from "./Components/UpcomingTrips";
import Featured from "./Components/Featured";
import ClientSay from "./Components/ClientSay";
import SocialMedia from "./Components/SocialMedia";
import FoundersNote from "./Components/FoundersNote";
import HoneyMoon from "./Components/HoneyMoon";
import NetworthyCollab from "./Components/NetworthyCollab";
import Gallery from "./Components/Gallery";
import BookTour from "./Components/BookTour";
import ActivitiesGallery from "./Components/ActivitiesGallery";
import Collaboration from "./Components/Collaboration";
const App = () => {
  return (
    <>
      <Header />
      <HoneyMoon />
      <Collaboration />
      <About />
      <UpcomingTrips />
      <ActivitiesGallery />
      <SocialMedia />
      <ClientSay />
      <Featured />
      <FoundersNote />
      <NetworthyCollab />
      <Gallery />
      <BookTour />
    </>
  );
};

export default App;
