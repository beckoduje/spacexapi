import React, { useEffect } from "react";
import FalconHeavyDescriptionCard from "./FalconHeavyDescriptionCard";
import ScrollReveal from "scrollreveal";

export default function FalconHeavyHeader() {
  useEffect(() => {
    ScrollReveal().reveal(".falcon-heavy-title-reveal", {
      delay: 500,
      distance: "50px",
      origin: "bottom",
    });
    ScrollReveal().reveal(".falcon-heavy-subtitle-reveal", {
      delay: 700,
      distance: "50px",
      origin: "bottom",
    });
  }, []);
  return (
    <section className="section falcon-heavy-header">
      <div className="section-shader">
        <h1 className="falcon-heavy-title-reveal">FALCON HEAVY</h1>
        <h2 className="falcon-heavy-subtitle-reveal">
          THE WORLD’S MOST POWERFUL ROCKET
        </h2>
        <FalconHeavyDescriptionCard />
      </div>
    </section>
  );
}
