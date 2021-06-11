import React, { useState } from "react";
import Mission from "./Mission";
import Nav from "./Nav";

// iz librarya
import { useInView } from "react-intersection-observer";

export default function MissionSection(props) {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.1,
  });

  if (!inView) {
    props.setStickyNav(true);
  } else {
    props.setStickyNav(false);
  }

  return (
    <section ref={ref} className="section mission">
      <div className="section-shader">
        <Nav />
        <Mission />
      </div>
    </section>
  );
}
