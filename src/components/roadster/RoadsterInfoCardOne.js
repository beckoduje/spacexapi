import React from "react";

export default function RoadsterInfoCardOne({ roadsterInfo }) {
  return (
    <div className="roadster-info-card-wrapper roadster-card-one">
      <div className="roadster-single-stat-cont">
        <div>Launch date:</div>
        <div>{roadsterInfo ? roadsterInfo.launch_date_utc : ""}</div>
      </div>
      <div className="roadster-single-stat-cont">
        <div>Launch mass:</div>
        <div>
          {roadsterInfo ? roadsterInfo.launch_mass_kg : ""}kg/
          {roadsterInfo ? roadsterInfo.launch_mass_lbs : ""}lbs
        </div>
      </div>
      <div className="roadster-single-stat-cont">
        <div>Eccentricity:</div>
        <div>{roadsterInfo ? roadsterInfo.eccentricity : ""}</div>
      </div>
      <div className="roadster-single-stat-cont">
        <div>Inclination:</div>
        <div>{roadsterInfo ? roadsterInfo.inclination : ""}4</div>
      </div>
      <div className="roadster-single-stat-cont">
        <div>Longitude:</div>
        <div>{roadsterInfo ? roadsterInfo.longitude : ""}</div>
      </div>
      <div className="roadster-single-stat-cont">
        <div>Speed in km/h:</div>
        <div>{roadsterInfo ? roadsterInfo.speed_kph : ""}</div>
      </div>
      <div className="roadster-single-stat-cont">
        <div>Speed in mp/h:</div>
        <div>{roadsterInfo ? roadsterInfo.speed_mph : ""}</div>
      </div>
    </div>
  );
}
