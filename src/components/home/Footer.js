import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";

export default function Footer() {
  useEffect(() => {
    ScrollReveal().reveal(".footer-reveal", {
      delay: 500,
      distance: "50px",
      origin: "bottom",
    });
  }, []);

  return (
    <footer className="footer-reveal">
      <ul>
        <li>SPACEX</li>
        <li>California</li>
        <li>Hawthorne</li>
        <li>Rocket Road</li>
        <li>https://www.spacex.com/</li>
      </ul>
      <ul>
        <li>
          <a href="https://twitter.com/spacex" target="_blank">
            {" "}
            TWITTER
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/spacex" target="_blank">
            {" "}
            YOUTUBE
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/spacex/" target="_blank">
            {" "}
            INSTAGRAM
          </a>
        </li>
        <li>
          <a href="https://www.flickr.com/photos/spacex" target="_blank">
            {" "}
            FLICKR
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/spacex/" target="_blank">
            {" "}
            LINKEDIN
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/contact">CONTACT US</Link>
        </li>
        <li>
          <a
            href="https://www.spacex.com/media/privacy_policy_spacex.pdf"
            target="_blank"
          >
            {" "}
            PRIVACY POLICY
          </a>
        </li>
      </ul>
    </footer>
  );
}
