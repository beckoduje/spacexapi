import React from "react";
import Nav from "../../nav/Nav";
import NextLaunchStats from "./NextLaunchStats";

export default function NextLaunch() {
  return (
    <section className="section next-launch">
      <div className="section-shader">
        <Nav />
        <div className="launches-title-container">
          <h1>Next Launch</h1>
          <div className="launches-title-white-box"></div>
        </div>
        <NextLaunchStats />
      </div>
    </section>
  );
}
