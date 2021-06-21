import React from "react";
import gwynneProfileImg from "../images/GwynneShotwell.jpg";
import muskProfileImg from "../images/elon-musk.jpg";
import mullerProfileImg from "../images/tom-muller.jpg";

export default function Leaders() {
  return (
    <div className="leaders-container">
      <div className="leader">
        <figure>
          <img
            className="leaders-profile-img"
            src={gwynneProfileImg}
            alt="Gwynne Shotwell"
          />
        </figure>
        <div className="leader-name">name</div>
        <div className="leader-position">position</div>
      </div>
      <div className="leader middle">
        <figure>
          <img
            className="leaders-profile-img"
            src={muskProfileImg}
            alt="Elon Musk"
          />
        </figure>
        <div className="leader-name">name</div>
        <div className="leader-position">position</div>
      </div>
      <div className="leader">
        <figure>
          <img
            className="leaders-profile-img"
            src={mullerProfileImg}
            alt="Tom Muller"
          />
        </figure>
        <div className="leader-name">name</div>
        <div className="leader-position">position</div>
      </div>
    </div>
  );
}
