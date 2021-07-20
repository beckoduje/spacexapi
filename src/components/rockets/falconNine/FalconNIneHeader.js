import React, { useEffect } from "react";
import Nav from "../../nav/Nav";
import FalconNineDescriptionCard from "./FalconNineDescriptionCard";

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

  return (
    <section ref={ref} className="section falcon-nine-header">
      <div className="section-shader">
        <Nav menuState={props.menuState} setMenuState={props.setMenuState} />
        <h1>FALCON 9</h1>
        <h2>FIRST ORBITAL CLASS ROCKET CAPABLE OF REFLIGHT</h2>
        <FalconNineDescriptionCard />
      </div>
    </section>
  );
}
