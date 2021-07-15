import React from "react";
import DragonHeader from "./DragonHeader";
import DragonStats from "./DragonStats";

export default function Dragon(props) {
  return (
    <section className="section-falcon">
      <DragonHeader
        menuState={props.menuState}
        setMenuState={props.setMenuState}
      />
      <DragonStats />
    </section>
  );
}
