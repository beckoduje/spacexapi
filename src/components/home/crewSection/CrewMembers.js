import React, { useEffect } from "react";
import MoleculesGrid from "./MoleculesGrid";
import MoleculesGridSmall from "./MoleculesGridSmall";

// iz librarya
import { useInView } from "react-intersection-observer";

export default function CrewMembers(props) {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.1,
  });

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
      <h2 ref={ref}>MEET OUR CREW MEMBERS</h2>
      <MoleculesGrid />
      <MoleculesGridSmall />
    </section>
  );
}
