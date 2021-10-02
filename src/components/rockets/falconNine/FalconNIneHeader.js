import React, { useEffect } from "react";
import Nav from "../../nav/Nav";
import FalconNineDescriptionCard from "./FalconNineDescriptionCard";
import ScrollReveal from "scrollreveal";

// iz librarya
import { useInView } from "react-intersection-observer";

export default function FalconNIneHeader(props) {
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
    ScrollReveal().reveal(".falcon-9-title-reveal", {
      delay: 500,
      distance: "50px",
      origin: "bottom",
    });
    ScrollReveal().reveal(".falcon-9-subtitle-reveal", {
      delay: 700,
      distance: "50px",
      origin: "bottom",
    });
  }, []);

  return (
    <section ref={ref} className="section falcon-nine-header">
      <div className="section-shader">
        <Nav menuState={props.menuState} setMenuState={props.setMenuState} />
        <h1 className="falcon-9-title-reveal">FALCON 9</h1>
        <h2 className="falcon-9-subtitle-reveal">
          FIRST ORBITAL CLASS ROCKET CAPABLE OF REFLIGHT
        </h2>
        <FalconNineDescriptionCard />
      </div>
    </section>
  );
}
