import React from "react";
import Nav from "../nav/Nav";
import DragonDescriptionCard from "./DragonDescriptionCard";

export default function DragonHeader() {
  return (
    <section className="section dragon-header">
      <div className="section-shader">
        <Nav />
        <h1>DRAGON</h1>
        <h2>SENDING HUMANS AND CARGO INTO SPACE</h2>
        <DragonDescriptionCard />
      </div>
    </section>
  );
}