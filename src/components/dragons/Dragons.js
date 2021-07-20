import React from "react";
import Nav from "../nav/Nav";
import Dragon from "./Dragon";

export default function Dragons(props) {
  return (
    <div className="dragon-wrapper">
      <Nav
        className="sticky-nav"
        stickyNav={props.stickyNav}
        menuState={props.menuState}
        setMenuState={props.setMenuState}
      />
      <Dragon
        menuState={props.menuState}
        setMenuState={props.setMenuState}
        stickyNav={props.stickyNav}
        setStickyNav={props.setStickyNav}
      />
    </div>
  );
}
