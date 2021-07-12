import React from "react";
import { Link } from "react-router-dom";

export default function Dragon() {
  return (
    <section className="section dragon">
      <div className="section-shader">
        <div className="section-info-container">
          <div className="section-info dragon">
            <h2>DRAGON</h2>
            <p>
              The Dragon spacecraft is capable of carrying up to 7 passengers to
              and from Earth orbit, and beyond. It is the only spacecraft
              currently flying that is capable of returning significant amounts
              of cargo to Earth, and is the first private spacecraft to take
              humans to the sp...
            </p>
            <button type="text">
              <Link to="/dragons">READ MORE</Link>
            </button>
          </div>
          <div className="white-box dragon"></div>
        </div>
      </div>
    </section>
  );
}
