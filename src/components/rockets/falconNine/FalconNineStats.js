import React from "react";
import FalconNineStatsSlideOne from "./FalconNineStatsSlideOne";
import FalconNineStatsSlideTwo from "./FalconNineStatsSlideTwo";
import FalconNineStatsSlideThree from "./FalconNineStatsSlideThree";
import FalconNineStatsSlideFour from "./FalconNineStatsSlideFour";

export default function FalconNineStats() {
  return (
    <section className="section falcon-nine-stats">
      <div className="section-shader">
        <h2>Falcon 9 - stats</h2>
        <div className="slides-wrapper">
          <FalconNineStatsSlideOne />
          <FalconNineStatsSlideTwo />
          <FalconNineStatsSlideThree />
          <FalconNineStatsSlideFour />
          <button className="slide-btn left">
            <i className="fas fa-arrow-alt-circle-left"></i>
          </button>
          <button className="slide-btn right">
            <i className="fas fa-arrow-alt-circle-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
