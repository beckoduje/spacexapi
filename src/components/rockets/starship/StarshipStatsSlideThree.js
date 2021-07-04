import React, { useState, useEffect } from "react";
import { getRocketData } from "../../../API.js";

export default function StarshipStatsSlideThree() {
  const [rocketInfo, setRocketInfo] = useState();

  useEffect(() => {
    getRocketData("").then(function (value) {
      setRocketInfo(value);
    });
  }, []);

  return (
    <div className="slider slider-starship slider-three">
      <div className="slider-stats-container">
        <h3>Second Stage</h3>
        <div className="stat-cont">
          <div>Engines Type:</div>
          <div className="engine-name">
            {rocketInfo ? rocketInfo[3].engines.type : ""}
          </div>
        </div>
        <div className="stat-cont">
          <div>Number of Engines:</div>
          <div>{rocketInfo ? rocketInfo[3].second_stage.engines : ""}</div>
        </div>
        <div className="stat-cont">
          <div>Fuel Amount:</div>
          <div>
            {rocketInfo ? rocketInfo[3].second_stage.fuel_amount_tons : ""}t
          </div>
        </div>
        <div className="stat-cont">
          <div>Thrust at Sea Level:</div>
          <div>
            {rocketInfo ? rocketInfo[3].second_stage.thrust.kN : ""}kN /{" "}
            {rocketInfo ? rocketInfo[3].second_stage.thrust.lbf : ""}lbf
          </div>
        </div>
      </div>
    </div>
  );
}
