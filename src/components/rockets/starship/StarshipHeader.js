import React from "react";
import StarshipDescriptionCard from "./StarshipDescriptionCard";

export default function StarshipHeader() {
  return (
    <section className="section falcon-nine-header">
      <div className="section-shader">
        <h1>STARSHIP</h1>
        <h2>FIRST ORBITAL CLASS ROCKET CAPABLE OF REFLIGHT</h2>
        <StarshipDescriptionCard />
      </div>
    </section>
  );
}
