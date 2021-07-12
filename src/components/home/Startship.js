import React from "react";
import { Link } from "react-router-dom";

export default function Startship() {
  return (
    <section className="section starship">
      <div className="section-shader">
        <div className="section-info-container">
          <div className="section-info starship">
            <h2>STARSHIP</h2>
            <p>
              SpaceX’s Starship spacecraft and Super Heavy rocket (collectively
              referred to as Starship) represent a fully reusable transportation
              system designed to carry both crew and cargo to Earth orbit, the
              Moon, Mars and beyond. Starship will be the world’s most powerful
              launch vehicle ever developed.
            </p>
            <button type="text">
              <Link to="/rockets">READ MORE</Link>
            </button>
          </div>
          <div className="white-box starship"></div>
        </div>
      </div>
    </section>
  );
}
