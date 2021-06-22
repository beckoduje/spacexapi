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
    </div>
  );
}
