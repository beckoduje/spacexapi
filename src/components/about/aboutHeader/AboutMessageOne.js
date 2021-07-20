import React, { useEffect } from "react";

// iz librarya
import { useInView } from "react-intersection-observer";

export default function AboutMessageOne(props) {
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
    <div ref={ref} className="about-message one">
      <div className="about-message-text-container">
        <p className="about-message-text">
          “You want to wake up in the morning and think the future is going to
          be great - and that’s what being a spacefaring civilization is all
          about. It’s about believing in the future and thinking that the future
          will be better than the past. And I can’t think of anything more
          exciting than going out there and being among the stars.”
        </p>
        <p className="about-message-name">Elon Musk</p>
      </div>
      <div className="white-box"></div>
    </div>
  );
}
