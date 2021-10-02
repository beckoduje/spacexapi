import React, { useEffect } from "react";
import Nav from "../nav/Nav";
import DragonDescriptionCard from "./DragonDescriptionCard";
import ScrollReveal from "scrollreveal";

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

  useEffect(() => {
    ScrollReveal().reveal(".dragon-title-reveal", {
      delay: 500,
      distance: "50px",
      origin: "bottom",
    });
    ScrollReveal().reveal(".dragon-subtitle-reveal", {
      delay: 700,
      distance: "50px",
      origin: "bottom",
    });
  }, []);

  return (
    <section ref={ref} className="section dragon-header">
      <div className="section-shader">
        <Nav menuState={props.menuState} setMenuState={props.setMenuState} />
        <h1 className="dragon-title-reveal">DRAGON</h1>
        <h2 className="dragon-subtitle-reveal">
          SENDING HUMANS AND CARGO INTO SPACE
        </h2>
        <DragonDescriptionCard />
      </div>
    </section>
  );
}
