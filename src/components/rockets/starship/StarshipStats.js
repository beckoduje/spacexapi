import React, { useEffect } from "react";
import StarshipStatsSlideOne from "./StarshipStatsSlideOne";
import StarshipStatsSlideTwo from "./StarshipStatsSlideTwo";
import StarshipStatsSlideThree from "./StarshipStatsSlideThree";
import StarshipStatsSlideFour from "./StarshipStatsSlideFour";

export default function StarshipStats() {
  let sliderStarship;
  let curSlideStarship = 0;
  let maxSlideStarship;

  useEffect(() => {
    sliderStarship = document.querySelectorAll(".slider-starship");
    maxSlideStarship = sliderStarship.length;
    initStarship();
  }, []);

  const goToSlideStarship = function (slide) {
    sliderStarship.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlideStarship = function () {
    if (curSlideStarship === maxSlideStarship - 1) {
      curSlideStarship = 0;
    } else {
      curSlideStarship++;
    }

    goToSlideStarship(curSlideStarship);
  };

  const prevSlideStarship = function () {
    if (curSlideStarship === 0) {
      curSlideStarship = maxSlideStarship - 1;
    } else {
      curSlideStarship--;
    }
    goToSlideStarship(curSlideStarship);
  };

  const initStarship = function () {
    goToSlideStarship(0);
  };

  return (
    <section className="section starship-stats">
      <div className="section-shader">
        <h2>Starship - stats</h2>
        <div className="slides-wrapper">
          <StarshipStatsSlideOne />
          <StarshipStatsSlideTwo />
          <StarshipStatsSlideThree />
          <StarshipStatsSlideFour />
          <button
            className="slide-btn slide-btn--left"
            onClick={prevSlideStarship}
          >
            <i className="fas fa-arrow-alt-circle-left"></i>
          </button>
          <button
            className="slide-btn slide-btn--right"
            onClick={nextSlideStarship}
          >
            <i className="fas fa-arrow-alt-circle-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
