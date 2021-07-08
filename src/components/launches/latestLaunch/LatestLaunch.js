import React, { useEffect } from "react";
import LatestLaunchStats from "./LatestLaunchStats";

export default function LatestLaunch() {
  let slider;
  let curSlide = 0;
  let maxSlide;

  useEffect(() => {
    slider = document.querySelectorAll(".slider-launch");
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
    <section className="section latest-launch">
      <div className="section-shader">
        <div className="launches-title-container">
          <h1>Latest Launch</h1>
          <div className="launches-title-white-box"></div>
        </div>
        <div className="slides-wrapper">
          <LatestLaunchStats />
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
