import React, { useState, useEffect } from "react";
import { getDragonsData } from "../../API.js";

export default function DragonStatsSlideThree() {
  const [dragonsInfo, setDragonsInfo] = useState();

  useEffect(() => {
    getDragonsData("").then(function (value) {
      setDragonsInfo(value);
    });
  }, []);

  return (
    <div className="slider slider-nine slider-three">
      <div className="slider-stats-container">
        <h3>Capsule</h3>
        <p>
          The Dragon capsule, also known as the pressurized section, allows for
          the transport of people as well as environmentally sensitive cargo.
          Dragon is equipped with Draco thrusters that allow Dragon to maneuver
          while on orbit and 8 SuperDracos that power the spacecraft’s launch
          escape system.
        </p>
      </div>
    </div>
  );
}
