import React, { useEffect } from "react";
import MoleculesGrid from "./MoleculesGrid";
import MoleculesGridSmall from "./MoleculesGridSmall";
import ScrollReveal from "scrollreveal";

// iz librarya
import { useInView } from "react-intersection-observer";

export default function CrewMembers(props) {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.1,
  });

  useEffect(() => {
    ScrollReveal().reveal(".crew-title-reveal", {
      delay: 500,
      distance: "50px",
      origin: "bottom",
    });
  }, []);

  useEffect(() => {
    if (props.setStickyNav) {
      if (!inView) {
        props.setStickyNav(true);
      } else {
        props.setStickyNav(false);
      }
    }
  }, [inView]);

  return (
    <section className="section crew">
      <h2 ref={ref} className="crew-title-reveal">
        MEET OUR CREW MEMBERS
      </h2>
      <MoleculesGrid />
      <MoleculesGridSmall />
    </section>
  );
}
