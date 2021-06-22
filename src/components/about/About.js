import React from "react";
import AboutHeader from "./aboutHeader/AboutHeader";
import CompanyInfo from "./companyInfo/CompanyInfo";

export default function About() {
  return (
    <div className="about-wrapper">
      <AboutHeader />
      <CompanyInfo />
    </div>
  );
}
