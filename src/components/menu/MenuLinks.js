import React from "react";
import { Link } from "react-router-dom";

export default function MenuLinks({ menuState, setMenuState }) {
  return (
    <ul className="menu-links-container">
      <li>
        <Link to="/about" onClick={() => setMenuState(!menuState)}>
          About Us
        </Link>
      </li>
      <li>
        <Link to="/rockets" onClick={() => setMenuState(!menuState)}>
          Rockets
        </Link>
      </li>
      <li>
        <Link to="/dragons" onClick={() => setMenuState(!menuState)}>
          Dragons
        </Link>
      </li>
      <li>
        <Link to="/launches" onClick={() => setMenuState(!menuState)}>
          Launches
        </Link>
      </li>
      <li>
        <Link to="/crew" onClick={() => setMenuState(!menuState)}>
          Crew
        </Link>
      </li>
      <li>
        <Link to="/roadster" onClick={() => setMenuState(!menuState)}>
          Roadster
        </Link>
      </li>
      <li>
        <Link to="/contact" onClick={() => setMenuState(!menuState)}>
          Contact Us
        </Link>
      </li>
    </ul>
  );
}
