import React from "react";
import Mission from "./Mission";
import Nav from "./Nav";
// import sectionMissionAstronaut from "..images/sectionMissionAstronaut.jpg";

export default function MissionSection() {
  return (
    <section className="section mission">
      <div className="section-shader">
        <Nav />
        <Mission />
      </div>
    </section>
  );
}
