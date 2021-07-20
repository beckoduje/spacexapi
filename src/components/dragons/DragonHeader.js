import React, { useEffect } from "react";
import Nav from "../nav/Nav";
import DragonDescriptionCard from "./DragonDescriptionCard";

// iz librarya
import { useInView } from "react-intersection-observer";

export default function DragonHeader(props) {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.1,
  });

  useEffect(() => {
    if (!inView) {
      props.setStickyNav(true);
    } else {
      props.setStickyNav(false);
    }
  }, [inView]);
  return (
    <section ref={ref} className="section dragon-header">
      <div className="section-shader">
        <Nav menuState={props.menuState} setMenuState={props.setMenuState} />
        <h1>DRAGON</h1>
        <h2>SENDING HUMANS AND CARGO INTO SPACE</h2>
        <DragonDescriptionCard />
      </div>
    </section>
  );
}
