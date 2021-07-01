import React from "react";
import FalconHeavyDescriptionCard from "./FalconHeavyDescriptionCard";

export default function FalconHeavyHeader() {
  return (
    <section className="section falcon-nine-header">
      <div className="section-shader">
        <h1>FALCON HEAVY</h1>
        <h2>FIRST ORBITAL CLASS ROCKET CAPABLE OF REFLIGHT</h2>
        <FalconHeavyDescriptionCard />
      </div>
    </section>
  );
}
