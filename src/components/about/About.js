import React, { useEffect } from "react";
import Nav from "../nav/Nav";
import AboutHeader from "./aboutHeader/AboutHeader";
import CompanyInfo from "./companyInfo/CompanyInfo";

export default function About(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-wrapper">
      <Nav
        className="sticky-nav"
        stickyNav={props.stickyNav}
        menuState={props.menuState}
        setMenuState={props.setMenuState}
      />
      <AboutHeader
        menuState={props.menuState}
        setMenuState={props.setMenuState}
        stickyNav={props.stickyNav}
        setStickyNav={props.setStickyNav}
      />
      <CompanyInfo />
    </div>
  );
}
