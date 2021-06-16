import React, { useState } from "react";
import Nav from "./Nav";
import MissionSection from "./MissionSection";
import FalconNineSection from "./FalconNineSection";
import FalconHeavy from "./FalconHeavy";
import Startship from "./Startship";
import Dragon from "./Dragon";
import RecentLaunch from "./RecentLaunch";
import CrewMembers from "./CrewMembers";
import Subscription from "./Subscription";
import Footer from "./Footer";

export default function Home() {
  const [stickyNav, setStickyNav] = useState(false);
  return (
    <div>
      <Nav className="sticky-nav" stickyNav={stickyNav} />
      <MissionSection setStickyNav={setStickyNav} />
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
