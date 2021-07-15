import React from "react";
import Nav from "../../nav/Nav";
import NextLaunchStats from "./NextLaunchStats";

export default function NextLaunch(props) {
  return (
    <section className="section next-launch">
      <div className="section-shader">
        <Nav menuState={props.menuState} setMenuState={props.setMenuState} />
        <div className="launches-title-container">
          <h1>Next Launch</h1>
          <div className="launches-title-white-box"></div>
        </div>
        <NextLaunchStats />
      </div>
    </section>
  );
}
