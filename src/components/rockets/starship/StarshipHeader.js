import React, { useEffect } from "react";
import StarshipDescriptionCard from "./StarshipDescriptionCard";
import ScrollReveal from "scrollreveal";

export default function StarshipHeader() {
  useEffect(() => {
    ScrollReveal().reveal(".starship-title-reveal", {
      delay: 500,
      distance: "50px",
      origin: "bottom",
    });
    ScrollReveal().reveal(".starship-subtitle-reveal", {
      delay: 700,
      distance: "50px",
      origin: "bottom",
    });
  }, []);

  return (
    <section className="section starship-header">
      <div className="section-shader">
        <h1 className="starship-title-reveal">STARSHIP</h1>
        <h2 className="starship-subtitle-reveal">SN15</h2>
        <StarshipDescriptionCard />
      </div>
    </section>
  );
}
