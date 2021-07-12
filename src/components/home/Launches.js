import React from "react";
import { Link } from "react-router-dom";

export default function Launches() {
  return (
    <section className="section recent-launch">
      <div className="section-shader">
        <div className="section-info-container">
          <div className="section-info recent-launch">
            <h2>LAUNCHES</h2>
            <p>
              SpaceX Suspendisse fermentum nibh sed libero molestie, vitae
              tristique tortor scelerisque. Nunc nec bibendum dolor. Aliquam
              massa nisi, venenatis et viverra lacinia, condimentum nec diam.
              Praesent vel lacus at augue lobortis mattis.
            </p>
            <button type="text">
              <Link to="/launches">READ MORE</Link>
            </button>
          </div>
          <div className="white-box recent-launch"></div>
        </div>
      </div>
    </section>
  );
}
