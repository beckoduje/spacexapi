import React, { useState, useEffect } from "react";
import Logo from "../../nav/Logo";
import { getCompanyInfoData } from "../../../API.js";

export default function CompanyStats() {
  const [companyInfo, setCompanyInfo] = useState();

  useEffect(() => {
    getCompanyInfoData().then(function (value) {
      console.log(value);
      setCompanyInfo(value);
    });
  }, []);

  console.log(companyInfo);

  return (
    <div className="company-stats-container">
      <h2 className="company-stats-title">
        <Logo />
      </h2>
      <div className="company-stats">
        <div className="stats-label">Founder:</div>
        <div>{companyInfo ? companyInfo.founder : ""}</div>
      </div>
      <div className="company-stats">
        <div className="stats-label">Founded:</div>
        <div>{companyInfo ? companyInfo.founded : ""}</div>
      </div>
      <div className="company-stats">
        <div className="stats-label">Employees:</div>
        <div>{companyInfo ? companyInfo.employees : ""}</div>
      </div>
      <div className="company-stats">
        <div className="stats-label">Headquarters:</div>
        <div>
          {companyInfo
            ? `${companyInfo.headquarters.address}, ${companyInfo.headquarters.city}, ${companyInfo.headquarters.state}`
            : ""}
        </div>
      </div>
      <div className="social-icons-container">
        <div className="social-icon">
          <i className="fab fa-twitter"></i>
        </div>
        <div className="social-icon">
          <i className="fab fa-youtube"></i>
        </div>
        <div className="social-icon">
          <i className="fab fa-instagram"></i>
        </div>
        <div className="social-icon">
          <i className="fab fa-flickr"></i>
        </div>
        <div className="social-icon">
          <i className="fab fa-linkedin-in"></i>
        </div>
      </div>
    </div>
  );
}
