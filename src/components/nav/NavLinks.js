import React from "react";
import { Link } from "react-router-dom";

export default function NavLinks({ menuState, setMenuState }) {
  return (
    <div className="nav-links-container">
      <ul className="nav-links-list">
        <li onClick={() => setMenuState(false)}>
          <Link to="/about">About Us</Link>
        </li>
        <li onClick={() => setMenuState(false)}>
          <Link to="/rockets">Rockets</Link>
        </li>
        <li onClick={() => setMenuState(false)}>
          <Link to="/dragons">Dragons</Link>
        </li>
        <li onClick={() => setMenuState(false)}>
          <Link to="/launches">Launches</Link>
        </li>
        <li onClick={() => setMenuState(false)}>
          <Link to="/crew">Crew</Link>
        </li>
      </ul>
      <div className="hambi-links" onClick={() => setMenuState(!menuState)}>
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
