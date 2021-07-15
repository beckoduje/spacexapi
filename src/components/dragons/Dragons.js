import React from "react";
import Dragon from "./Dragon";

export default function Dragons(props) {
  return (
    <div className="dragon-wrapper">
      <Dragon menuState={props.menuState} setMenuState={props.setMenuState} />
    </div>
  );
}
