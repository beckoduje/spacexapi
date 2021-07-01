import React from "react";
import FalconHeavyStats from "./FalconHeavyStats";
import FalconHeavyHeader from "./FalconHeavyHeader";

export default function FalconHeavy() {
  return (
    <section className="section-falcon">
      <FalconHeavyHeader />
      <FalconHeavyStats />
    </section>
  );
}
