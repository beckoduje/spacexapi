import React, { useState, useEffect } from "react";
import { getLatestLaunchData } from "../../../API.js";

export default function LatestLaunchStats() {
  const [latestLaunchInfo, setLatestLaunchInfo] = useState();

  useEffect(() => {
    getLatestLaunchData("").then(function (value) {
      setLatestLaunchInfo(value);
    });
  }, []);

  return (
    <div className="slider slider-launch slider-one">
      <div className="next-launch-stats">
        <div className="nl-single-stat-cont">
          <div>Name:</div>
          <div>{latestLaunchInfo ? latestLaunchInfo.name : ""}</div>
        </div>
        <div className="nl-single-stat-cont">
          <div>Flight Number:</div>
          <div>{latestLaunchInfo ? latestLaunchInfo.flight_number : ""}</div>
        </div>
        <div className="nl-single-stat-cont">
          <div>Date:</div>
          <div>
            {latestLaunchInfo
              ? latestLaunchInfo.date_local.slice(0, 10).replaceAll("-", "/")
              : ""}
          </div>
        </div>
        <div className="nl-single-stat-cont">
          <div>Launchpad:</div>
          <div>{latestLaunchInfo ? latestLaunchInfo.launchpad : ""}</div>
        </div>
        {/* <div className="nl-single-stat-cont">
          <div>Launchpad region:</div>
          <div>California</div>
        </div> */}
        {/* <div className="nl-single-stat-cont">
          <div>Landpad:</div>
          <div>LZ-1</div>
        </div> */}
        <div className="nl-single-stat-cont">
          <div>Rocket:</div>
          <div>{latestLaunchInfo ? latestLaunchInfo.rocket : ""}</div>
        </div>
        <div className="nl-single-stat-cont">
          <div>Ship:</div>
          <div>
            {latestLaunchInfo ? "TBA" || latestLaunchInfo.ships[0] : ""}
          </div>
        </div>
      </div>
    </div>
  );
}
