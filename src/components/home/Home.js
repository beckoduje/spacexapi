import React, { useEffect } from "react";
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

export default function Home(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Nav
        className="sticky-nav"
        stickyNav={props.stickyNav}
        menuState={props.menuState}
        setMenuState={props.setMenuState}
      />
      <MissionSection
        setStickyNav={props.setStickyNav}
        menuState={props.menuState}
        setMenuState={props.setMenuState}
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
