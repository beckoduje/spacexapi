import React from "react";
import Nav from "../../nav/Nav";
import DragonOneDescriptionCard from "./DragonOneDescriptionCard";

export default function DragonOneHeader() {
  return (
    <section className="section dragon-header">
      <div className="section-shader">
        <Nav />
        <h1>Dragon One</h1>
        <h2>SENDING HUMANS AND CARGO INTO SPACE</h2>
        <DragonOneDescriptionCard />
      </div>
    </section>
  );
}
