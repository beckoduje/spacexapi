import React, { useEffect } from "react";
import Mission from "./Mission";
import Nav from "../../nav/Nav";

// iz librarya
import { useInView } from "react-intersection-observer";

export default function MissionSection(props) {
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
    <section ref={ref} className="section mission">
      <div className="section-shader">
        <Nav menuState={props.menuState} setMenuState={props.setMenuState} />
        <Mission />
      </div>
    </section>
  );
}
