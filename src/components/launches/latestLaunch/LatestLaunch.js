import React from "react";
import LatestLaunchStats from "./LatestLaunchStats";

export default function LatestLaunch() {
  return (
    <section className="section latest-launch">
      <div className="section-shader">
        <div className="launches-title-container">
          <h1>Latest Launch</h1>
          <div className="launches-title-white-box"></div>
        </div>
        <LatestLaunchStats />
      </div>
    </section>
  );
}
