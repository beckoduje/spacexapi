import React from "react";
import { Link } from "react-router-dom";

export default function Mission() {
  return (
    <div className="section-info-container">
      <div className="section-info mission">
        <h2>MAKING HUMANITY MULTIPLANETARY</h2>
        <p>
          Building on the achievements of Falcon 9 and Falcon Heavy, SpaceX is
          working on a next generation of fully reusable launch vehicles that
          will be the most powerful ever built, capable of carrying humans to
          Mars and other destinations in the solar system.
        </p>
        <button type="text">
          <Link to="/about">READ MORE</Link>
        </button>
      </div>
      <div className="white-box"></div>
    </div>
  );
}
