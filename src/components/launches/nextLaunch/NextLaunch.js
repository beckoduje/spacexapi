import React, { useEffect } from "react";
import Nav from "../../nav/Nav";
import NextLaunchStats from "./NextLaunchStats";

// iz librarya
import { useInView } from "react-intersection-observer";

export default function NextLaunch(props) {
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
    <section ref={ref} className="section next-launch">
      <div className="section-shader">
        <Nav menuState={props.menuState} setMenuState={props.setMenuState} />
        <div className="launches-title-container">
          <h1>Next Launch</h1>
          <div className="launches-title-white-box"></div>
        </div>
        <NextLaunchStats />
      </div>
    </section>
  );
}
