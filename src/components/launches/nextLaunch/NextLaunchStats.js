import React, { useState, useEffect } from "react";
import {
  getNextLaunchData,
  getLaunchpadData,
  getSingleRocketData,
  getShipData,
} from "../../../API.js";

export default function NextLaunchStats() {
  const [nextLaunchInfo, setNextLaunchInfo] = useState();
  const [launchpadData, setLaunchpadData] = useState();
  const [nextRocket, setNextRocket] = useState();
  const [shipInfo, setShipInfo] = useState();

  useEffect(() => {
    getNextLaunchData("").then(function (value) {
      setNextLaunchInfo(value);
      getLaunchpadData(value.launchpad).then(function (value2) {
        setLaunchpadData(value2);
      });
      getSingleRocketData(value.rocket).then(function (val3) {
        setNextRocket(val3);
      });
      getShipData(value.ships[0]).then(function (val4) {
        setShipInfo(val4);
      });
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
      <div className="nl-single-stat-cont">
        <div>Rocket:</div>
        <div>{nextRocket ? nextRocket.name : ""}</div>
      </div>
      <div className="nl-single-stat-cont">
        <div>Ship:</div>
        <div>{shipInfo ? shipInfo.name || "TBA" : ""}</div>
      </div>
    </div>
  );
}
