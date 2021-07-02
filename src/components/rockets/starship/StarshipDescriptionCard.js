import React, { useState, useEffect } from "react";
import { getRocketData } from "../../../API.js";

export default function StarshipDescriptionCard() {
  const [rocketInfo, setRocketInfo] = useState();

  useEffect(() => {
    getRocketData("").then(function (value) {
      setRocketInfo(value);
    });
  }, []);

  return (
    <div className="rocket-description-container">
      <div className="rocket-description-text-container">
        <p className="rocket-description-text">
          {rocketInfo ? rocketInfo[3].description : ""}
        </p>
      </div>
      <div className="white-box"></div>
    </div>
  );
}
