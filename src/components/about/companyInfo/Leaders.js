import React, { useState, useEffect, useContext } from "react";
import gwynneProfileImg from "../../../images/GwynneShotwell.jpg";
import muskProfileImg from "../../../images/elon-musk.jpg";
import mullerProfileImg from "../../../images/tom-muller.jpg";
// import { DataContext } from "../../../App";
import { getData } from "../../../API.js";

export default function Leaders() {
  // const companyInfo = useContext(DataContext);
  const [datas, getDatas] = useState();

  useEffect(() => {
    getData().then(function (value) {
      console.log(value);
      getDatas(value);
    });
  }, []);

  console.log(datas);

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
          <div className="leader-name">{datas ? datas.coo : ""}</div>
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
          <div className="leader-name">{datas ? datas.ceo : ""}</div>
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
          <div className="leader-name">{datas ? datas.cto_propulsion : ""}</div>
          <div className="leader-position">Cto propulsion</div>
        </div>
      </div>
    </div>
  );
}
