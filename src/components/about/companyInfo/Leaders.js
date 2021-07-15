import React, { useState, useEffect, useContext } from "react";
import gwynneProfileImg from "../../../images/GwynneShotwell.jpg";
import muskProfileImg from "../../../images/elon-musk.jpg";
import mullerProfileImg from "../../../images/tom-muller.jpg";
import { getCompanyInfoData } from "../../../API.js";

export default function Leaders() {
  const [companyInfo, setCompanyInfo] = useState();

  useEffect(() => {
    getCompanyInfoData().then(function (value) {
      setCompanyInfo(value);
    });
  }, []);

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
          <div className="leader-name">
            {companyInfo ? companyInfo.coo : ""}
          </div>
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
          <div className="leader-name">
            {companyInfo ? companyInfo.ceo : ""}
          </div>
          <div className="leader-position">Ceo &amp; Cto</div>
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
          <div className="leader-name">
            {companyInfo ? companyInfo.cto_propulsion : ""}
          </div>
          <div className="leader-position">Cto propulsion</div>
        </div>
      </div>
    </div>
  );
}
