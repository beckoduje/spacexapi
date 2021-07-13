import React, { useState } from "react";
import Nav from "../nav/Nav";
import MissionSection from "./missionSection/MissionSection";
import FalconNineSection from "./FalconNineSection";
import FalconHeavy from "./FalconHeavy";
import Startship from "./Startship";
import Dragon from "./Dragon";
import Launches from "./Launches";
import CrewMembers from "./crewSection/CrewMembers";
import Subscription from "./Subscription";
import Footer from "./Footer";
import Menu from "../menu/Menu";

export default function Home(props) {
  // const [stickyNav, setStickyNav] = useState(false);
  return (
    <div>
      <h1>Di si Danijela?</h1>
      <h2>Hej haj...</h2>
      <Menu />
      <Nav className="sticky-nav" stickyNav={props.stickyNav} />
      <MissionSection setStickyNav={props.setStickyNav} />
      <FalconNineSection />
      <FalconHeavy />
      <Startship />
      <Dragon />
      <Launches />
      <CrewMembers />
      <Subscription />
      <Footer />
    </div>
  );
}
