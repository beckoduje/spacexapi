import React from "react";
import Nav from "../nav/Nav";
import FalconNine from "./falconNine/FalconNine";
import FalconHeavy from "./falconHeavy/FalconHeavy";
import Starship from "./starship/Starship";

export default function Rockets(props) {
  return (
    <div className="rockets-wrapper">
      <Nav
        className="sticky-nav"
        stickyNav={props.stickyNav}
        menuState={props.menuState}
        setMenuState={props.setMenuState}
      />
      <FalconNine
        menuState={props.menuState}
        setMenuState={props.setMenuState}
        stickyNav={props.stickyNav}
        setStickyNav={props.setStickyNav}
      />
      <FalconHeavy />
      <Starship />
    </div>
  );
}
