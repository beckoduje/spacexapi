import React, { useEffect } from "react";
import CrewMembers from "../home/crewSection/CrewMembers";
import Nav from "../nav/Nav";

export default function Crew(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="crew-wrapper">
      <Nav
        className="sticky-nav"
        stickyNav={props.stickyNav}
        menuState={props.menuState}
        setMenuState={props.setMenuState}
      />
      <Nav menuState={props.menuState} setMenuState={props.setMenuState} />
      <CrewMembers setStickyNav={props.setStickyNav} />
    </div>
  );
}
