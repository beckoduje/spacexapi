import React, { useState, useEffect } from "react";
import { getNextLaunchData, getLaunchpadData } from "../../../API.js";

export default function NextLaunchStats() {
  const [nextLaunchInfo, setNextLaunchInfo] = useState();
  const [launchpadData, setLaunchpadData] = useState();

  useEffect(() => {
    getNextLaunchData("").then(function (value) {
      setNextLaunchInfo(value);
    });
    getLaunchpadData(nextLaunchInfo.launchpad).then(function (value) {
      setLaunchpadData(value);
    });
  }, []);
  return (
    <div className="next-launch-stats">
      <div className="nl-single-stat-cont">
        <div>Name:</div>
        <div>{nextLaunchInfo ? nextLaunchInfo.name : ""}</div>
      </div>
      <div className="nl-single-stat-cont">
        <div>Flight Number:</div>
        <div>{nextLaunchInfo ? nextLaunchInfo.flight_number : ""}</div>
      </div>
      <div className="nl-single-stat-cont">
        <div>Date:</div>
        <div>
          {nextLaunchInfo
            ? nextLaunchInfo.date_local.slice(0, 10).replaceAll("-", "/")
            : ""}
        </div>
      </div>
      <div className="nl-single-stat-cont">
        <div>Launchpad:</div>
        <div>{launchpadData ? launchpadData.name : ""}</div>
      </div>
      <div className="nl-single-stat-cont">
        <div>Launchpad region:</div>
        <div>{launchpadData ? launchpadData.region : ""}</div>
      </div>
      {/* <div className="nl-single-stat-cont">
        <div>Landpad:</div>
        <div>{nextLaunchInfo ? nextLaunchInfo.name : ""}</div>
      </div> */}
      <div className="nl-single-stat-cont">
        <div>Rocket:</div>
        <div>{nextLaunchInfo ? nextLaunchInfo.rocket : ""}</div>
      </div>
      <div className="nl-single-stat-cont">
        <div>Ship:</div>
        <div>{nextLaunchInfo ? "TBA" || nextLaunchInfo.ships[0] : ""}</div>
      </div>
    </div>
  );
}
