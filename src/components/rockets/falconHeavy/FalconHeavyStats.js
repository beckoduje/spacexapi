import React, { useEffect } from "react";
import FalconHeavyStatsSlideOne from "./FalconHeavyStatsOne";
import FalconHeavyStatsSlideTwo from "./FalconHeavyStatsSlideTwo";
import FalconHeavyStatsSlideThree from "./FalconHeavyStatsSlideThree";
import FalconHeavyStatsSlideFour from "./FalconHeavyStatsFour";

export default function FalconHeavyStats() {
  let sliderHeavy;
  let curSlideHeavy = 0;
  let maxSlideHeavy;

  useEffect(() => {
    sliderHeavy = document.querySelectorAll(".slider-heavy");
    maxSlideHeavy = sliderHeavy.length;
    initHeavy();
  }, []);

  const goToSlideHeavy = function (slide) {
    sliderHeavy.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlideHeavy = function () {
    if (curSlideHeavy === maxSlideHeavy - 1) {
      curSlideHeavy = 0;
    } else {
      curSlideHeavy++;
    }

    goToSlideHeavy(curSlideHeavy);
  };

  const prevSlideHeavy = function () {
    if (curSlideHeavy === 0) {
      curSlideHeavy = maxSlideHeavy - 1;
    } else {
      curSlideHeavy--;
    }
    goToSlideHeavy(curSlideHeavy);
  };

  const initHeavy = function () {
    goToSlideHeavy(0);
  };

  return (
    <section className="section falcon-heavy-stats">
      <div className="section-shader">
        <h2>Falcon Heavy - stats</h2>
        <div className="slides-wrapper">
          <FalconHeavyStatsSlideOne />
          <FalconHeavyStatsSlideTwo />
          <FalconHeavyStatsSlideThree />
          <FalconHeavyStatsSlideFour />
          <button
            className="slide-btn slide-btn--left"
            onClick={prevSlideHeavy}
          >
            <i className="fas fa-arrow-alt-circle-left"></i>
          </button>
          <button
            className="slide-btn slide-btn--right"
            onClick={nextSlideHeavy}
          >
            <i className="fas fa-arrow-alt-circle-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
