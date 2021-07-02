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
          <div>{rocketInfo ? rocketInfo[3].engines.type : ""}</div>
        </div>
        <div className="stat-cont">
          <div>Number of Engines:</div>
          <div>{rocketInfo ? rocketInfo[3].second_stage.engines : ""}</div>
        </div>
        <div className="stat-cont">
          <div>Fuel Amount:</div>
          <div>
            {rocketInfo ? rocketInfo[3].second_stage.fuel_amount_tons : ""}
          </div>
        </div>
        <div className="stat-cont">
          <div>Burn Time:</div>
          <div>
            {rocketInfo ? rocketInfo[3].second_stage.burn_time_sec : ""}
          </div>
        </div>
        <div className="stat-cont">
          <div>Thrust at Sea Level:</div>
          <div>{rocketInfo ? rocketInfo[3].second_stage.thrust.kN : ""}</div>
        </div>
      </div>
    </div>
  );
}