import React, { useState, useEffect } from "react";
import { getLatestLaunchData } from "../../../API.js";

export default function LatestLaunchDescription() {
  const [latestLaunchInfo, setLatestLaunchInfo] = useState();

  useEffect(() => {
    getLatestLaunchData("").then(function (value) {
      setLatestLaunchInfo(value);
    });
  }, []);
  return (
    <div className="slider slider-launch slider-two">
      <div className="next-launch-stats">
        <p>{latestLaunchInfo ? latestLaunchInfo.details : ""}</p>
      </div>
    </div>
  );
}
