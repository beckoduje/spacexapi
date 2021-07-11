import React from "react";
import Nav from "../nav/Nav";
import RoadsterInfoContainer from "./RoadsterInfoContainer";

export default function Roadster() {
  return (
    <section className="section roadster">
      <div className="section-shader">
        <Nav />
        <h1>ROADSTER</h1>
        <RoadsterInfoContainer />
      </div>
    </section>
  );
}
