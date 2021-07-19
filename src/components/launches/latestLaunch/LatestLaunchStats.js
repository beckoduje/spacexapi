import React, { useState, useEffect } from "react";
import {
  getLatestLaunchData,
  getLaunchpadData,
  getSingleRocketData,
  getShipData,
} from "../../../API.js";

export default function LatestLaunchStats() {
  const [latestLaunchInfo, setLatestLaunchInfo] = useState();
  const [launchpadData, setLaunchpadData] = useState();
  const [latestRocket, setLatestRocket] = useState();
  const [shipInfo, setShipInfo] = useState();

  useEffect(() => {
    getLatestLaunchData("").then(function (value) {
      setLatestLaunchInfo(value);
      getLaunchpadData(value.launchpad).then(function (value2) {
        setLaunchpadData(value2);
      });
      getSingleRocketData(value.rocket).then(function (val3) {
        setLatestRocket(val3);
      });
      getShipData(value.ships[0]).then(function (val4) {
        setShipInfo(val4);
      });
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
          <div>{launchpadData ? launchpadData.name : ""}</div>
        </div>
        <div className="nl-single-stat-cont">
          <div>Launchpad region:</div>
          <div>{launchpadData ? launchpadData.region : ""}</div>
        </div>
        <div className="nl-single-stat-cont">
          <div>Rocket:</div>
          <div>{latestRocket ? latestRocket.name : ""}</div>
        </div>
        <div className="nl-single-stat-cont">
          <div>Ship:</div>
          <div>{shipInfo ? shipInfo.name || "TBA" : ""}</div>
        </div>
      </div>
    </div>
  );
}
