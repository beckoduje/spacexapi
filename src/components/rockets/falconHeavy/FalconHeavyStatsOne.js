import React, { useState, useEffect } from "react";
import { getRocketData } from "../../../API.js";

export default function FalconHeavyStatsSlideOne() {
  const [rocketInfo, setRocketInfo] = useState();

  useEffect(() => {
    getRocketData("").then(function (value) {
      setRocketInfo(value);
    });
  }, []);

  return (
    <div className="slider slider-heavy slider-one">
      <div className="slider-stats-container">
        <h3>Overview</h3>
        <div className="stat-cont">
          <div>Success rate:</div>
          <div>{rocketInfo ? rocketInfo[2].success_rate_pct : ""}</div>
        </div>
        <div className="stat-cont">
          <div>Stages:</div>
          <div>{rocketInfo ? rocketInfo[2].stages : ""}</div>
        </div>
        <div className="stat-cont">
          <div>Height:</div>
          <div>{rocketInfo ? rocketInfo[2].height.meters : ""}</div>
        </div>
        <div className="stat-cont">
          <div>Diameter:</div>
          <div>{rocketInfo ? rocketInfo[2].diameter.meters : ""}</div>
        </div>
        <div className="stat-cont">
          <div>Mass:</div>
          <div>{rocketInfo ? rocketInfo[2].mass.kg : ""}</div>
        </div>
        <div className="stat-cont">
          <div>Payload to Leo:</div>
          <div>{rocketInfo ? rocketInfo[2].payload_weights[0].kg : ""}</div>
        </div>
        <div className="stat-cont">
          <div>Payload to Gto:</div>
          <div>{rocketInfo ? rocketInfo[2].payload_weights[1].kg : ""}</div>
        </div>
        <div className="stat-cont">
          <div>Payload to Mars:</div>
          <div>{rocketInfo ? rocketInfo[2].payload_weights[2].kg : ""}</div>
        </div>
      </div>
    </div>
  );
}
