import React from "react";
import FalconNine from "./falconNine/FalconNine";
import FalconHeavy from "./falconHeavy/FalconHeavy";
import Starship from "./starship/Starship";

export default function Rockets(props) {
  return (
    <div className="rockets-wrapper">
      <FalconNine
        menuState={props.menuState}
        setMenuState={props.setMenuState}
      />
      <FalconHeavy />
      <Starship />
    </div>
  );
}
