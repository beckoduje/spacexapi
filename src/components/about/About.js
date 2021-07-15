import React from "react";
import AboutHeader from "./aboutHeader/AboutHeader";
import CompanyInfo from "./companyInfo/CompanyInfo";

export default function About(props) {
  console.log(props);
  return (
    <div className="about-wrapper">
      <AboutHeader
        menuState={props.menuState}
        setMenuState={props.setMenuState}
      />
      <CompanyInfo />
    </div>
  );
}
