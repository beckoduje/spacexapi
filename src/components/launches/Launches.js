import React, { useEffect } from "react";
import Nav from "../nav/Nav";
import NextLaunch from "./nextLaunch/NextLaunch";
import LatestLaunch from "./latestLaunch/LatestLaunch";

export default function Launches(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="launches-wrapper">
      <Nav
        className="sticky-nav"
        stickyNav={props.stickyNav}
        menuState={props.menuState}
        setMenuState={props.setMenuState}
      />
      <NextLaunch
        menuState={props.menuState}
        setMenuState={props.setMenuState}
        stickyNav={props.stickyNav}
        setStickyNav={props.setStickyNav}
      />
      <LatestLaunch />
    </div>
  );
}
