import React from "react";
import NextLaunch from "./nextLaunch/NextLaunch";
import LatestLaunch from "./latestLaunch/LatestLaunch";

export default function Launches() {
  return (
    <div className="launches-wrapper">
      <NextLaunch />
      <LatestLaunch />
    </div>
  );
}
