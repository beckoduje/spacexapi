import React, { useEffect } from "react";
import DragonHeader from "./DragonHeader";
import DragonStats from "./DragonStats";

export default function Dragon(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="section-falcon">
      <DragonHeader
        menuState={props.menuState}
        setMenuState={props.setMenuState}
        stickyNav={props.stickyNav}
        setStickyNav={props.setStickyNav}
      />
      <DragonStats />
    </section>
  );
}
