import React from "react";
import StarshipDescriptionCard from "./StarshipDescriptionCard";

export default function StarshipHeader() {
  return (
    <section className="section starship-header">
      <div className="section-shader">
        <h1>STARSHIP</h1>
        <h2>SN15</h2>
        <StarshipDescriptionCard />
      </div>
    </section>
  );
}
