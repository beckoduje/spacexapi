import React, { useState, useEffect } from "react";
import { getDragonsData } from "../../API.js";

export default function DragonStatsSlideOne() {
  const [dragonsInfo, setDragonsInfo] = useState();

  useEffect(() => {
    getDragonsData("").then(function (value) {
      setDragonsInfo(value);
    });
  }, []);

  return (
    <div className="slider slider-nine slider-one">
      <div className="slider-stats-container">
        <h3>Overview</h3>
        <div className="stat-cont">
          <div>First flight:</div>
          <div>{dragonsInfo ? dragonsInfo[1].first_flight : ""}</div>
        </div>
        <div className="stat-cont">
          <div>Crew capacity:</div>
          <div>{dragonsInfo ? dragonsInfo[1].crew_capacity : ""}</div>
        </div>
        <div className="stat-cont">
          <div>Height:</div>
          <div>
            {dragonsInfo ? dragonsInfo[1].height_w_trunk.meters : ""}m /{" "}
            {dragonsInfo ? dragonsInfo[1].height_w_trunk.feet : ""}ft
          </div>
        </div>
        <div className="stat-cont">
          <div>Diameter:</div>
          <div>
            {dragonsInfo ? dragonsInfo[1].diameter.meters : ""}m /{" "}
            {dragonsInfo ? dragonsInfo[1].diameter.feet : ""}ft
          </div>
        </div>
        <div className="stat-cont">
          <div>Mass:</div>
          <div>
            {dragonsInfo ? dragonsInfo[1].dry_mass_kg : ""}kg /{" "}
            {dragonsInfo ? dragonsInfo[1].dry_mass_lb : ""}lb
          </div>
        </div>
        <div className="stat-cont">
          <div>Trunk volume:</div>
          <div>
            {dragonsInfo ? dragonsInfo[1].trunk.trunk_volume.cubic_meters : ""}
            m3 /{" "}
            {dragonsInfo ? dragonsInfo[1].trunk.trunk_volume.cubic_feet : ""}ft3
          </div>
        </div>
        <div className="stat-cont">
          <div>Launch payload mass:</div>
          <div>
            {dragonsInfo ? dragonsInfo[1].launch_payload_mass.kg : ""}kg /{" "}
            {dragonsInfo ? dragonsInfo[1].launch_payload_mass.lb : ""}lb
          </div>
        </div>
        <div className="stat-cont">
          <div>Return payload mass:</div>
          <div>
            {dragonsInfo ? dragonsInfo[1].return_payload_mass.kg : ""}kg /{" "}
            {dragonsInfo ? dragonsInfo[1].return_payload_mass.lb : ""}lb
          </div>
        </div>
      </div>
    </div>
  );
}
