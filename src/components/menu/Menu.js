import React from "react";
import Nav from "../nav/Nav";
import MenuLinks from "./MenuLinks";

export default function Menu(props) {
  return (
    <section
      className={props.menuState ? "section menu active" : "section menu"}
    >
      <div className="section-shader">
        <Nav
          className="opened-menu"
          menuState={props.menuState}
          setMenuState={props.setMenuState}
        />
        <MenuLinks
          menuState={props.menuState}
          setMenuState={props.setMenuState}
        />
      </div>
    </section>
  );
}
