import React, { useState, useEffect } from "react";
import { getRocketData } from "../../../API.js";

export default function FalconNineStatsSlideOne() {
  const [rocketInfo, setRocketInfo] = useState();

  useEffect(() => {
    getRocketData("").then(function (value) {
      setRocketInfo(value);
    });
  }, []);

  return (
    <div className="slider slider-one">
      <div className="stat-cont">
        <div>Success rate:</div>
        <div>{rocketInfo ? rocketInfo[1].success_rate_pct : ""}</div>
      </div>
      <div className="stat-cont">
        <div>Stages:</div>
        <div>{rocketInfo ? rocketInfo[1].stages : ""}</div>
      </div>
      <div className="stat-cont">
        <div>Height:</div>
        <div>{rocketInfo ? rocketInfo[1].height.meters : ""}</div>
      </div>
      <div className="stat-cont">
        <div>Diameter:</div>
        <div>{rocketInfo ? rocketInfo[1].diameter.meters : ""}</div>
      </div>
      <div className="stat-cont">
        <div>Mass:</div>
        <div>{rocketInfo ? rocketInfo[1].mass.kg : ""}</div>
      </div>
      <div className="stat-cont">
        <div>Payload to Leo:</div>
        <div>{rocketInfo ? rocketInfo[1].payload_weights[0].kg : ""}</div>
      </div>
      <div className="stat-cont">
        <div>Payload to Gto:</div>
        <div>{rocketInfo ? rocketInfo[1].payload_weights[1].kg : ""}</div>
      </div>
      <div className="stat-cont">
        <div>Payload to Mars:</div>
        <div>{rocketInfo ? rocketInfo[1].payload_weights[2].kg : ""}</div>
      </div>
    </div>
  );
}
