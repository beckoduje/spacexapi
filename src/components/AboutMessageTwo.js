import React from "react";
import atom from "../images/atom.png";

export default function AboutMessageTwo() {
  return (
    <div className="about-message two">
      <div className="about-message-text-container">
        <p className="about-message-text">
          SpaceX designs, manufactures and launches advanced rockets and
          spacecraft. The company was founded in 2002 to revolutionize space
          technology, with the ultimate goal of enabling people to live on other
          planets.
        </p>
        <img className="atom-img" src={atom} alt="atom image" />
      </div>
      <div className="white-box"></div>
    </div>
  );
}
