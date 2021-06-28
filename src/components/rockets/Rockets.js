import React from "react";
import FalconNine from "./falconNine/FalconNine";
import FalconHeavy from "./falconHeavy/FalconHeavy";
import Starship from "./starship/Starship";

export default function Rockets() {
  return (
    <div className="rockets-wrapper">
      <FalconNine />
      <FalconHeavy />
      <Starship />
    </div>
  );
}
