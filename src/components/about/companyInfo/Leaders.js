import React, { useState, useEffect } from "react";
import gwynneProfileImg from "../../../images/GwynneShotwell.jpg";
import muskProfileImg from "../../../images/elon-musk.jpg";
import mullerProfileImg from "../../../images/tom-muller.jpg";

import { companyData } from "../../../companyData";
console.log(companyData);
console.log(companyData[0]);

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
        <div className="leader-info-container">
          {/* <div className="leader-name">{companyData[0].coo}</div> */}
          <div className="leader-position">Coo</div>
        </div>
      </div>
      <div className="leader middle">
        <figure>
          <img
            className="leaders-profile-img"
            src={muskProfileImg}
            alt="Elon Musk"
          />
        </figure>
        <div className="leader-info-container">
          {/* <div className="leader-name">{companyData[0].ceo}</div> */}
          <div className="leader-position">Ceo&amp;Cto</div>
        </div>
      </div>
      <div className="leader">
        <figure>
          <img
            className="leaders-profile-img"
            src={mullerProfileImg}
            alt="Tom Muller"
          />
        </figure>
        <div className="leader-info-container">
          {/* <div className="leader-name">{companyData[0].cto_propulsion}</div> */}
          <div className="leader-position">Cto propulsion</div>
        </div>
      </div>
    </div>
  );
}
