import React from "react";
import Nav from "../nav/Nav";
import MenuLinks from "./MenuLinks";

export default function Menu(props) {
  return (
    <section
      //   className={!props.menuState ? "section menu" : "section menu active"}
      className="section menu"
    >
      <div className="section-shader">
        {/* ovo doli nisam nigdi napisa, DUMMY */}
        <Nav className="opened-menu" openedMenu={props.openedMenu} />
        <MenuLinks />
      </div>
    </section>
  );
}
