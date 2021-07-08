import React from "react";
import { Link } from "react-router-dom";

export default function MenuLinks() {
  return (
    <ul className="menu-links-container">
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
      <li>
        <Link to="/roadster">Roadster</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
}
