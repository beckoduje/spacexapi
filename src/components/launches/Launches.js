import React from "react";
import NextLaunch from "./nextLaunch/NextLaunch";
import LatestLaunch from "./latestLaunch/LatestLaunch";

export default function Launches(props) {
  return (
    <div className="launches-wrapper">
      <NextLaunch
        menuState={props.menuState}
        setMenuState={props.setMenuState}
      />
      <LatestLaunch />
    </div>
  );
}
