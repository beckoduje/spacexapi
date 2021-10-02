import React, { useState, useEffect } from "react";
import { getRocketData } from "../../../API.js";
import ScrollReveal from "scrollreveal";

export default function FalconNineDescriptionCard() {
  const [rocketInfo, setRocketInfo] = useState();

  useEffect(() => {
    getRocketData("").then(function (value) {
      setRocketInfo(value);
    });
  }, []);

  useEffect(() => {
    ScrollReveal().reveal(".falcon-9-description-reveal", {
      delay: 900,
      distance: "50px",
      origin: "bottom",
    });
  }, []);

  return (
    <div className="rocket-description-container falcon-9-description-reveal">
      <div className="rocket-description-text-container">
        <p className="rocket-description-text">
          {rocketInfo ? rocketInfo[1].description : ""}
        </p>
      </div>
      <div className="white-box"></div>
    </div>
  );
}
