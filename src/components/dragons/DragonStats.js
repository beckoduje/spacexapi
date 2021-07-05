import React, { useEffect } from "react";
import DragonStatsSlideOne from "./DragonStatsSlideOne";
import DragonStatsSlideTwo from "./DragonStatsSlideTwo";
import DragonStatsSlideThree from "./DragonStatsSlideThree";

export default function DragonStats() {
  let slider;
  let curSlide = 0;
  let maxSlide;

  useEffect(() => {
    slider = document.querySelectorAll(".slider-nine");
    maxSlide = slider.length;
    init();
  }, []);

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
    <section className="section dragon-stats">
      <div className="section-shader">
        <h2>Dragon - stats</h2>
        <div className="slides-wrapper">
          <DragonStatsSlideOne />
          <DragonStatsSlideTwo />
          <DragonStatsSlideThree />
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
