import React from "react";

export default function RoadsterInfoCardTwo({ roadsterInfo, setShrink }) {
  return (
    <div
      className="roadster-info-card-wrapper roadster-card-two"
      onMouseEnter={() => {
        setShrink(true);
      }}
      onMouseLeave={() => {
        setShrink(false);
      }}
    >
      <div className="roadster-single-stat-cont">
        <div>Orbit type:</div>
        <div className="orbit-type">
          {roadsterInfo ? roadsterInfo.orbit_type : ""}
        </div>
      </div>
      <div className="roadster-single-stat-cont">
        <div>Earth distance in km:</div>
        <div>{roadsterInfo ? roadsterInfo.earth_distance_km : ""}</div>
      </div>
      <div className="roadster-single-stat-cont">
        <div>Earth distance in mi:</div>
        <div>{roadsterInfo ? roadsterInfo.earth_distance_mi : ""}</div>
      </div>
      <div className="roadster-single-stat-cont">
        <div>Mars distance in km:</div>
        <div>{roadsterInfo ? roadsterInfo.mars_distance_km : ""}</div>
      </div>
      <div className="roadster-single-stat-cont">
        <div>Mars distance in mi:</div>
        <div>{roadsterInfo ? roadsterInfo.mars_distance_mi : ""}</div>
      </div>
    </div>
  );
}
