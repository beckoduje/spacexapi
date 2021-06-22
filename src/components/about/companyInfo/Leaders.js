import React, { useState, useEffect } from "react";
import gwynneProfileImg from "../../../images/GwynneShotwell.jpg";
import muskProfileImg from "../../../images/elon-musk.jpg";
import mullerProfileImg from "../../../images/tom-muller.jpg";

export default function Leaders() {
  const [companyData, setCompanyData] = useState();

  fetch("https://api.spacexdata.com/v4/company")
    // fetch vraća Promise
    // koristimo then metodu da nešto napravimo s promise
    .then(function (response) {
      // data moramo vratiti i na njemu koristiti json() metodu da dobijemo data (novi promise)
      return response.json();
    })
    // onda opet then metodu
    .then(function (data) {
      () => {
        setCompanyData(data);
      };
    });

  // useEffect(() => {
  //   setCompanyData(data);
  // }, [])

  console.log(companyData);
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
          <div className="leader-name">name</div>
          <div className="leader-position">position</div>
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
          <div className="leader-name">name</div>
          <div className="leader-position">position</div>
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
          <div className="leader-name">name</div>
          <div className="leader-position">position</div>
        </div>
      </div>
    </div>
  );
}
