import React, { useState, useEffect } from "react";
import { getRocketData } from "../../../API.js";

export default function FalconNineStatsSlideTwo() {
  const [rocketInfo, setRocketInfo] = useState();

  useEffect(() => {
    getRocketData("").then(function (value) {
      setRocketInfo(value);
    });
  }, []);

  return (
    <div className="slider slider-nine slider-two">
      <div className="slider-stats-container">
        <h3>First Stage</h3>
        <div className="stat-cont">
          <div>Engines Type:</div>
          <div className="engine-name">
            {rocketInfo ? rocketInfo[1].engines.type : ""}
          </div>
        </div>
        <div className="stat-cont">
          <div>Number of Engines:</div>
          <div>{rocketInfo ? rocketInfo[1].first_stage.engines : ""}</div>
        </div>
        <div className="stat-cont">
          <div>Fuel Amount:</div>
          <div>
            {rocketInfo ? rocketInfo[1].first_stage.fuel_amount_tons : ""}t
          </div>
        </div>
        <div className="stat-cont">
          <div>Burn Time:</div>
          <div>
            {rocketInfo ? rocketInfo[1].first_stage.burn_time_sec : ""}sec
          </div>
        </div>
        <div className="stat-cont">
          <div>Thrust at Sea Level:</div>
          <div>
            {rocketInfo ? rocketInfo[1].first_stage.thrust_sea_level.kN : ""}kN
            / {rocketInfo ? rocketInfo[1].first_stage.thrust_sea_level.lbf : ""}
            lbf
          </div>
        </div>
        <div className="stat-cont">
          <div>Thrust in Vacuum:</div>
          <div>
            {rocketInfo ? rocketInfo[1].first_stage.thrust_vacuum.kN : ""}kN /{" "}
            {rocketInfo ? rocketInfo[1].first_stage.thrust_vacuum.lbf : ""}lbf
          </div>
        </div>
      </div>
    </div>
  );
}
