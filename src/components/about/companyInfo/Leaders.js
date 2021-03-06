import React, { useState, useEffect, useContext } from "react";
import gwynneProfileImg from "../../../images/GwynneShotwell.jpg";
import muskProfileImg from "../../../images/elon-musk.jpg";
import mullerProfileImg from "../../../images/tom-muller.jpg";
import { getCompanyInfoData } from "../../../API.js";
import ScrollReveal from "scrollreveal";

export default function Leaders() {
  const [companyInfo, setCompanyInfo] = useState();

  useEffect(() => {
    getCompanyInfoData().then(function (value) {
      setCompanyInfo(value);
    });
  }, []);

  useEffect(() => {
    ScrollReveal().reveal(".leaders-reveal", {
      delay: 500,
      distance: "50px",
      origin: "bottom",
    });
  }, []);

  return (
    <div className="leaders-container leaders-reveal">
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
        <i className="fas fa-certificate"></i>
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
        <i className="fab fa-centos"></i>
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
        <i className="fas fa-certificate"></i>
      </div>
    </div>
  );
}
