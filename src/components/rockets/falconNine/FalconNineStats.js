import React, { useEffect } from "react";
import FalconNineStatsSlideOne from "./FalconNineStatsSlideOne";
import FalconNineStatsSlideTwo from "./FalconNineStatsSlideTwo";
import FalconNineStatsSlideThree from "./FalconNineStatsSlideThree";
import FalconNineStatsSlideFour from "./FalconNineStatsSlideFour";

export default function FalconNineStats() {
  let slider;
  let curSlide = 0;
  let maxSlide;

  useEffect(() => {
    slider = document.querySelectorAll(".slider-nine");
    maxSlide = slider.length;
    init();
  });

  const goToSlide = function (slide) {
    slider.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };

  const init = function () {
    goToSlide(0);
  };

  return (
    <section className="section falcon-nine-stats">
      <div className="section-shader">
        <h2>Falcon 9 - stats</h2>
        <div className="slides-wrapper">
          <FalconNineStatsSlideOne />
          <FalconNineStatsSlideTwo />
          <FalconNineStatsSlideThree />
          <FalconNineStatsSlideFour />
          <button className="slide-btn slide-btn--left" onClick={prevSlide}>
            <i className="fas fa-arrow-alt-circle-left"></i>
          </button>
          <button className="slide-btn slide-btn--right" onClick={nextSlide}>
            <i className="fas fa-arrow-alt-circle-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
