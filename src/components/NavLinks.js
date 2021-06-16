import React from "react";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";

export default function NavLinks() {
  return (
    <div className="nav-links-container">
      <ul className="nav-links-list">
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/rockets">Rockets</Link>
        </li>
        <li>
          <Link to="/dragons">Dragons</Link>
        </li>
        <li>
          <Link to="/launches">Launches</Link>
        </li>
        <li>
          <Link to="/crew">Crew</Link>
        </li>
      </ul>
      <div className="hambi-links">
        <div className="hambi-cont top">
          <div className="hambi-long top"></div>
          <div className="hambi-circle top"></div>
        </div>
        <div className="hambi-cont middle">
          <div className="hambi-long middle"></div>
          <div className="hambi-circle middle"></div>
        </div>
        <div className="hambi-cont bottom">
          <div className="hambi-long bottom"></div>
          <div className="hambi-circle bottom"></div>
        </div>
      </div>
    </div>
  );
}
