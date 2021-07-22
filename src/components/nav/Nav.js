import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

export default function Nav(props) {
  return (
    // <nav className={`nav ${props.className}`}>
    //   <Logo />
    //   <NavLinks />
    // </nav>
    <nav
      className={
        !props.stickyNav
          ? `nav ${props.className}`
          : `nav ${props.className} active`
      }
    >
      <Logo menuState={props.menuState} setMenuState={props.setMenuState} />
      <NavLinks menuState={props.menuState} setMenuState={props.setMenuState} />
    </nav>
  );
}
