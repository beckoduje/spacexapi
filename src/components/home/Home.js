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
  const [menuState, setMenuState] = useState(false);
  return (
    <div>
      <Menu menuState={menuState} setMenuState={setMenuState} />
      <Nav
        className="sticky-nav"
        stickyNav={props.stickyNav}
        menuState={menuState}
        setMenuState={setMenuState}
      />
      <MissionSection
        setStickyNav={props.setStickyNav}
        menuState={menuState}
        setMenuState={setMenuState}
      />
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
