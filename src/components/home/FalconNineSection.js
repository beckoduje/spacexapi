import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";

// // iz librarya
// import { useInView } from "react-intersection-observer";

export default function FalconNineSection() {
  // const [show, setShow] = useState(false);

  // const { ref, inView, entry } = useInView({
  //   threshold: 0.7,
  // });

  // useEffect(() => {
  //   if (inView) {
  //     setShow(true);
  //   }
  // }, [inView]);

  useEffect(() => {
    ScrollReveal().reveal(".falcon-9-reveal", {
      delay: 500,
      distance: "100px",
      origin: "right",
    });
  }, []);

  return (
    <section className="section falcon-9">
      <div className="section-shader">
        {/* <div
          className={
            show ? "section-info-container show" : "section-info-container"
          }
          ref={ref}
        > */}
        <div className="section-info-container falcon-9-reveal">
          <div className="section-info falcon-9">
            <h2>FALCON 9</h2>
            <p>
              Falcon 9 is a reusable, two-stage rocket designed and manufactured
              by SpaceX for the reliable and safe transport of people and
              payloads into Earth orbit and beyond. Falcon 9 is the world’s
              first orbital class reusable rocket. Reusability allows SpaceX to
              refly the most expensive parts of the rocket.
            </p>
            <button type="text">
              <Link to="/rockets">READ MORE</Link>
            </button>
          </div>
          <div className="white-box falcon-9"></div>
        </div>
      </div>
    </section>
  );
}
