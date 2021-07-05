import React, { useState, useEffect } from "react";
import { getDragonsData } from "../../API.js";

export default function DragonStatsSlideTwo() {
  const [dragonsInfo, setDragonsInfo] = useState();

  useEffect(() => {
    getDragonsData("").then(function (value) {
      setDragonsInfo(value);
    });
  }, []);

  return (
    <div className="slider slider-nine slider-two">
      <div className="slider-stats-container">
        <h3>Trunk</h3>
        <p>
          The interstage is a composite structure that connects the first and
          second stages, and houses the pneumatic pushers that allow the first
          and second stage to separate during flight. Falcon 9 is equipped with
          four hypersonic grid fins positioned at the base of the interstage.
          They orient the rocket during reentry by moving the center of
          pressure.
        </p>
        <div className="stat-cont">
          <div>Volume:</div>
          <div>
            {dragonsInfo ? dragonsInfo[1].trunk.trunk_volume.cubic_meters : ""}
            m3 /{" "}
            {dragonsInfo ? dragonsInfo[1].trunk.trunk_volume.cubic_feet : ""}
            ft3
          </div>
        </div>
      </div>
    </div>
  );
}
