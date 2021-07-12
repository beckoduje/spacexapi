import React from "react";
import { Link } from "react-router-dom";

export default function FalconHeavy() {
  return (
    <section className="section falcon-heavy">
      <div className="section-shader">
        <div className="section-info-container">
          <div className="section-info falcon-heavy">
            <h2>FALCON HEAVY</h2>
            <p>
              Falcon Heavy is the most powerful operational rocket in the world
              by a factor of two. With the ability to lift into orbit nearly 64
              metric tons (141,000 lb) Falcon Heavy can lift more than twice the
              payload of the next closest operational vehicle, the Delta IV
              Heavy.
            </p>
            <button type="text">
              <Link to="/rockets">READ MORE</Link>
            </button>
          </div>
          <div className="white-box falcon-heavy"></div>
        </div>
      </div>
    </section>
  );
}
