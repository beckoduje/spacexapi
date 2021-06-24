import React from "react";
import Logo from "../../nav/Logo";

export default function CompanyStats() {
  return (
    <div className="company-stats-container">
      <h2 className="company-stats-title">
        <Logo />
      </h2>
      <div className="company-stats">
        <div>Founder:</div>
        <div></div>
      </div>
      <div className="company-stats">
        <div>Founded:</div>
        <div></div>
      </div>
      <div className="company-stats">
        <div>Employees:</div>
        <div></div>
      </div>
      <div className="company-stats">
        <div>Headquarters:</div>
        <div></div>
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
