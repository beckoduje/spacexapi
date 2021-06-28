import React from "react";
import Nav from "../../nav/Nav";
import FalconNineDescriptionCard from "./FalconNineDescriptionCard";

export default function FalconNIneHeader() {
  return (
    <section className="section falcon-nine-header">
      <div className="section-shader">
        <Nav />
        <h1>FALCON 9</h1>
        <h2>FIRST ORBITAL CLASS ROCKET CAPABLE OF REFLIGHT</h2>
        <FalconNineDescriptionCard />
      </div>
    </section>
  );
}