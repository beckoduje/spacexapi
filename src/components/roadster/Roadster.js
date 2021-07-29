import React, { useEffect } from "react";
import Nav from "../nav/Nav";
import RoadsterInfoContainer from "./RoadsterInfoContainer";

export default function Roadster(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="section roadster">
      <div className="section-shader">
        <Nav menuState={props.menuState} setMenuState={props.setMenuState} />
        <h1>ROADSTER</h1>
        <RoadsterInfoContainer />
      </div>
    </section>
  );
}
