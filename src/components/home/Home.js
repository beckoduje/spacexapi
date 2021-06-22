import React, { useState } from "react";
import Nav from "../nav/Nav";
import MissionSection from "./missionSection/MissionSection";
import FalconNineSection from "./FalconNineSection";
import FalconHeavy from "./FalconHeavy";
import Startship from "./Startship";
import Dragon from "./Dragon";
import RecentLaunch from "./RecentLaunch";
import CrewMembers from "./crewSection/CrewMembers";
import Subscription from "./Subscription";
import Footer from "./Footer";

export default function Home(props) {
  // const [stickyNav, setStickyNav] = useState(false);
  return (
    <div>
      <Nav className="sticky-nav" stickyNav={props.stickyNav} />
      <MissionSection setStickyNav={props.setStickyNav} />
      <FalconNineSection />
      <FalconHeavy />
      <Startship />
      <Dragon />
      <RecentLaunch />
      <CrewMembers />
      <Subscription />
      <Footer />
    </div>
  );
}
