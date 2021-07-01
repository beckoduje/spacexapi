import React from "react";
import StartshipHeader from "./StarshipHeader";
import StarshipStats from "./StarshipStats";

export default function Starship() {
  return (
    <section className="section-falcon">
      <StartshipHeader />
      <StarshipStats />
    </section>
  );
}
