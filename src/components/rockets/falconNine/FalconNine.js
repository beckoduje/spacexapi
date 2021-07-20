import React from "react";
import FalconNineHeader from "./FalconNineHeader";
import FalconNineStats from "./FalconNineStats";

export default function FalconNine(props) {
  return (
    <section className="section-falcon">
      <FalconNineHeader
        menuState={props.menuState}
        setMenuState={props.setMenuState}
        stickyNav={props.stickyNav}
        setStickyNav={props.setStickyNav}
      />
      <FalconNineStats />
    </section>
  );
}
