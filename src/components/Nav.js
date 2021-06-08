import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

export default function Nav(props) {
  return (
    <nav className={`nav ${props.className}`}>
      <Logo />
      <NavLinks />
    </nav>
  );
}
