import React, { useState } from "react";
import "./css/style.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MissionSection from "./components/MissionSection";
import FalconNineSection from "./components/FalconNineSection";
import FalconHeavy from "./components/FalconHeavy";
import Startship from "./components/Startship";
import Dragon from "./components/Dragon";
import RecentLaunch from "./components/RecentLaunch";

function App() {
  const [stickyNav, setStickyNav] = useState(false);

  return (
    <>
      <Nav className="sticky-nav" stickyNav={stickyNav} />
      <MissionSection setStickyNav={setStickyNav} />
      <FalconNineSection />
      <FalconHeavy />
      <Startship />
      <Dragon />
      <RecentLaunch />
    </>
  );
}

export default App;
