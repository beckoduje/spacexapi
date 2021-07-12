import React from "react";
import { Link } from "react-router-dom";

export default function FalconNineSection() {
  return (
    <section className="section falcon-9">
      <div className="section-shader">
        <div className="section-info-container">
          <div className="section-info falcon-9">
            <h2>FALCON 9</h2>
            <p>
              Falcon 9 is a reusable, two-stage rocket designed and manufactured
              by SpaceX for the reliable and safe transport of people and
              payloads into Earth orbit and beyond. Falcon 9 is the world’s
              first orbital class reusable rocket. Reusability allows SpaceX to
              refly the most expensive parts of the rocket.
            </p>
            <button type="text">
              <Link to="/rockets">READ MORE</Link>
            </button>
          </div>
          <div className="white-box falcon-9"></div>
        </div>
      </div>
    </section>
  );
}
