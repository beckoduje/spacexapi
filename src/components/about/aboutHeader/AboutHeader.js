import React from "react";
import Nav from "../../nav/Nav";
import AboutMessageOne from "./AboutMessageOne";
import AboutMessageTwo from "./AboutMessageTwo";

export default function AboutHeader(props) {
  return (
    <section className="section about-header">
      <div className="section-shader">
        <Nav menuState={props.menuState} setMenuState={props.setMenuState} />
        <AboutMessageOne
          stickyNav={props.stickyNav}
          setStickyNav={props.setStickyNav}
        />
        <AboutMessageTwo />
      </div>
    </section>
  );
}
